use crate::routes::user::OrgId;
use std::collections::HashMap;
use std::pin::Pin;
use actix_web::{web, FromRequest, HttpRequest};
use actix_web::dev::Payload;
use actix_web::error::{ErrorInternalServerError, ErrorNotFound, ErrorUnauthorized};
use actix_web::web::Data;
use jsonwebtoken::{decode, decode_header, Algorithm, DecodingKey, Validation};
use jsonwebtoken::jwk::JwkSet;
use reqwest::Client;
use serde::de::DeserializeOwned;
use serde::Deserialize;
use sqlx::PgPool;
use uuid::Uuid;
use crate::{AppState, COGNITO_DOMAIN};
use tokio::sync::RwLock;
use crate::error::{ApiError, AuthError};
use crate::routes::user::{UserID, UserPrivateProfile};

load_dotenv::load_dotenv!();
const EXPECTED_ISSUER: &str = "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_S5CN4oDwh";
const JWKS_URL: &str = "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_S5CN4oDwh/.well-known/jwks.json";

pub struct AuthUser {
    sub: Uuid,
    user_data:UserPrivateProfile,
}

pub struct JwksCache {
    keys: RwLock<HashMap<String, DecodingKey>>,
    jwks_url: String,
    issuer: String,
    client_id: String,
    http: reqwest::Client,
}

#[derive(Debug, Deserialize)]
pub struct Claims {
    pub sub: String,
    pub client_id: String,     // access tokens carry client_id (not aud)
    pub token_use: String,     // "access" or "id"
    pub exp: usize,
    pub iss: String,
}
#[derive(Deserialize)]
struct UserInfo {
    sub: String,
    email: String,
}

impl FromRequest for AuthUser {
    type Error = actix_web::Error;
    type Future = Pin<Box<dyn Future<Output = Result<Self, Self::Error>>>>;

    fn from_request(req: &HttpRequest, _: &mut Payload) -> Self::Future {
        let token = req
            .headers()
            .get("Authorization")
            .and_then(|h| h.to_str().ok())
            .and_then(|s| s.strip_prefix("Bearer "))
            .map(str::to_owned);
        let state = req.app_data::<web::Data<AppState>>().cloned();

        Box::pin(async move {
            let token = token.ok_or_else(|| ErrorUnauthorized("missing bearer token"))?;
            let state = state.ok_or_else(|| ErrorUnauthorized("server misconfigured"))?;

            let claims = state.jwks_cache.verify(&token).await
                .map_err(|e| ErrorUnauthorized(format!("invalid token {e}")))?;


            let cognito_sub = Uuid::parse_str(&claims.sub)
                .map_err(|_| ErrorUnauthorized("invalid sub"))?;
            let maybe_user = match AuthUser::get_from_sub(&state.pool, &cognito_sub).await {
                Ok(u) => u,
                Err(_) => {
                    return Err(ErrorInternalServerError("failed to fetch user"));
                }
            };
            let user = match maybe_user {
                Some(u) => u,
                None => {
                    let user = fetch_user_info(&Client::new(), COGNITO_DOMAIN, &*token).await.expect("Failed to fetch user");
                    match AuthUser::create_new(&state.pool, &cognito_sub, user.email).await{
                        Ok(u) => u,
                        Err(_) => {return Err(ErrorInternalServerError("failed to create new user"))}
                    }
                }
            };

            Ok(AuthUser {
                sub: Uuid::parse_str(&claims.sub)
                    .map_err(|_| ErrorUnauthorized("bad sub"))?,
                user_data: user,
            })
        })
    }
}

impl AuthUser{
    pub(crate) fn get_user_data(&self) ->UserPrivateProfile{
        self.user_data.clone()
    }

    async fn create_new(pool:&PgPool, sub: &Uuid, email: String) -> Result<UserPrivateProfile,ApiError> {
        let id = Uuid::now_v7();

        let data = sqlx::query_as!(
            UserPrivateProfile,
            r#"INSERT INTO users (id, cognito_sub, email)
               VALUES ($1, $2, $3)
               ON CONFLICT (cognito_sub) DO UPDATE SET email = EXCLUDED.email
               RETURNING
                 id   AS "id: UserID",
                 org AS "org: OrgId",
                 cognito_sub,
                 email,
                 username,
                 joined_date"#,
            id, sub, email
        ).fetch_one(pool).await?;
        
        Ok(data)
    }

    pub async fn get_from_sub(pool:&PgPool, sub: &Uuid) -> Result<Option<UserPrivateProfile>,ApiError> {
        let profile = sqlx::query_as!(
        UserPrivateProfile,
        r#"SELECT
             id AS "id: UserID",
             org AS "org: OrgId",
             cognito_sub,
             email,
             username,
             joined_date
         FROM users WHERE cognito_sub=$1 LIMIT 1"#,
        sub
    ).fetch_one(pool).await?;

        Ok(Some(profile))
    }
}


impl JwksCache {
    /// Build from region + pool id; fetches keys once up front.
    pub async fn new(region: &str, pool_id: &str, client_id: String) -> Result<Self, AuthError> {
        let issuer = format!("https://cognito-idp.{region}.amazonaws.com/{pool_id}");
        let jwks_url = format!("{issuer}/.well-known/jwks.json");

        let cache = Self {
            keys: RwLock::new(HashMap::new()),
            jwks_url,
            issuer,
            client_id,
            http: reqwest::Client::new(),
        };
        cache.refresh().await?;   // populate at startup
        Ok(cache)
    }

    /// Fetch the JWKS and replace the cache contents wholesale.
    async fn refresh(&self) -> Result<(), AuthError> {
        // network + parse happen OUTSIDE the lock
        let set: JwkSet = self.http.get(&self.jwks_url).send().await?.json().await?;

        let mut map = HashMap::new();
        for jwk in &set.keys {
            if let Some(kid) = jwk.common.key_id.clone() {
                if let Ok(key) = DecodingKey::from_jwk(jwk) {
                    map.insert(kid, key);
                }
            }
        }

        // brief exclusive lock just to swap
        let mut keys = self.keys.write().await;
        *keys = map;
        Ok(())
    }

    /// Read a key by kid (shared lock, clones out).
    async fn get(&self, kid: &str) -> Option<DecodingKey> {
        let keys = self.keys.read().await;
        keys.get(kid).cloned()
    }

    /// Get a key, refreshing once on miss (handles Cognito key rotation).
    async fn get_or_refresh(&self, kid: &str) -> Result<DecodingKey, AuthError> {
        if let Some(k) = self.get(kid).await {
            return Ok(k);
        }
        self.refresh().await?;
        self.get(kid).await.ok_or(AuthError::UnknownKid)
    }

    /// Full verification: signature, alg pin, issuer, client, token type.
    pub async fn verify(&self, token: &str) -> Result<Claims, AuthError> {
        let header = decode_header(token)?;
        let kid = header.kid.ok_or(AuthError::NoKid)?;
        let key = self.get_or_refresh(&kid).await?;

        let mut validation = Validation::new(Algorithm::RS256);   // pinned, not from header
        validation.set_issuer(&[&self.issuer]);
        // NOTE: access tokens have no `aud`; we validate client_id manually below
        validation.validate_aud = false;

        let data = decode::<Claims>(token, &key, &validation)?;

        // access-token checks the library can't do for us
        if data.claims.token_use != "access" {
            return Err(AuthError::WrongTokenType);
        }
        if data.claims.client_id != self.client_id {
            return Err(AuthError::WrongTokenClient);
        }

        Ok(data.claims)
    }
}

async fn fetch_user_info(http: &reqwest::Client, domain: &str, access_token: &str)
                         -> Result<UserInfo, AuthError>
{
    let url = format!("https://{domain}/oauth2/userInfo");
    let info = http.get(&url)
        .bearer_auth(access_token)
        .send().await?
        .json::<UserInfo>().await?;
    Ok(info)
}
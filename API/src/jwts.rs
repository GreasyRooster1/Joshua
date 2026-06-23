use std::collections::HashMap;
use std::pin::Pin;
use actix_web::{FromRequest, HttpRequest};
use actix_web::dev::Payload;
use actix_web::error::ErrorUnauthorized;
use actix_web::web::Data;
use jsonwebtoken::{decode, decode_header, Algorithm, DecodingKey, Validation};
use jsonwebtoken::jwk::JwkSet;
use serde::de::DeserializeOwned;
use serde::Deserialize;
use uuid::Uuid;
use crate::AppState;
use crate::routes::user::AuthUser;

load_dotenv::load_dotenv!();
const EXPECTED_ISSUER: &str = "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_S5CN4oDwh";
const JWKS_URL: &str = "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_S5CN4oDwh/.well-known/jwks.json";
const EXPECTED_CLIENT_ID: &'static str =env!("COGNITO_CLIENT_ID");

struct JwksCache {
    keys: HashMap<String, DecodingKey>,
}

#[derive(Deserialize)]
struct Claims{
    sub: String,
    email: String,
}

impl FromRequest for AuthUser {
    type Error = actix_web::Error;
    type Future = Pin<Box<dyn Future<Output = Result<Self, Self::Error>>>>;

    fn from_request(req: &HttpRequest, _payload: &mut Payload) -> Self::Future {
        // pull what we need OUT of req synchronously, before the async move
        let token = req
            .headers()
            .get("Authorization")
            .and_then(|h| h.to_str().ok())
            .and_then(|s| s.strip_prefix("Bearer "))
            .map(str::to_owned);

        // grab shared state (JWKS cache) from app_data
        let app_data = req.app_data::<Data<AppState>>().cloned();


        Box::pin(async move {
            let state = match app_data {
                Some(app_data) => app_data.jwk_data,
                None => {
                    return Err(ErrorUnauthorized("No app data available"));
                }
            };
            let token = token.ok_or_else(|| ErrorUnauthorized("missing bearer token"))?;

            let claims = verify_cognito_jwt(&token, &state.keys)
                .await
                .map_err(|_| ErrorUnauthorized("invalid token"))?;

            Ok(AuthUser {
                sub: Uuid::parse_str(&claims.sub)
                    .map_err(|_| ErrorUnauthorized("bad sub"))?,
                email: claims.email,
            })
        })
    }
}

async fn verify_cognito_jwt(token: &str, mut jwks_cache: &mut JwksCache) -> Result<Claims, AuthError> {
    let header = decode_header(token)?;
    let kid = header.kid.ok_or(AuthError::NoKid)?;

    // try cache; on miss, refresh once (Cognito may have rotated keys) and retry
    let decoding_key = match jwks_cache.keys.get(&kid) {
        Some(k) => k,
        None => {
            let key = fetch_jwk_keys(&kid,&mut jwks_cache).await?;
            jwks_cache.keys.get(&kid).ok_or(AuthError::UnknownKid)?
        }
    };

    let mut validation = Validation::new(Algorithm::RS256);
    validation.set_issuer(&[EXPECTED_ISSUER]);
    validation.set_audience(&[EXPECTED_CLIENT_ID]);

    let data = decode::<Claims>(token, &decoding_key, &validation)?;
    Ok(data.claims)
}

async fn fetch_jwk_keys(kid:&str,cache: &mut JwksCache) -> Result<DecodingKey,JwksParseError>{
    let jwks: JwkSet = reqwest::get(JWKS_URL).await?.json().await?;
    let jwk = jwks.find(&kid).ok_or(AuthError::UnknownKid)?;
    let decoding_key = DecodingKey::from_jwk(jwk)?;
    cache.keys.insert(kid.to_string(), decoding_key.clone());
    Ok(decoding_key)
}
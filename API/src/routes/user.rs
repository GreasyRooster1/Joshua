use std::pin::Pin;
use actix_web::{get, web, FromRequest, HttpRequest, Responder};
use actix_web::dev::Payload;
use actix_web::error::ErrorUnauthorized;
use chrono::{DateTime, Utc};
use uuid::Uuid;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use web::Data;
use jsonwebtoken::{decode, decode_header, DecodingKey, Validation, Algorithm};
use crate::routes;

#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct UserID(Uuid);
#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct OrgId(Uuid);
#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct CognitoSub(Uuid);


pub struct AuthUser {
    pub sub: Uuid,
    pub email: String,
}

pub struct UserPrivateProfile{
    id: UserID,
    email: String,
    username: String,
    joined_date:DateTime<Utc>,
    org:OrgId,
    cognito_sub:CognitoSub,
}

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/user")
            .service(get_user_private_profile)

    );
}

//generate profile if it doesn't exist here
#[get("/get_user_private_profile/{user_id}")]
pub async fn get_user_private_profile(pool: Data<PgPool>,user_id: web::Path<String>) -> impl Responder{
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
        let jwks = req.app_data::<Data<AppState>>().cloned();

        Box::pin(async move {
            let token = token.ok_or_else(|| ErrorUnauthorized("missing bearer token"))?;
            let state = jwks.ok_or_else(|| ErrorUnauthorized("server misconfig"))?;

            let claims = verify_cognito_jwt(&token, &state.jwks)
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

async fn verify_cognito_jwt(token: &str, jwks: &JwksCache) -> Result<Claims, AuthError> {
    let header = decode_header(token)?;
    let kid = header.kid.ok_or(AuthError::NoKid)?;
    let key = jwks.get(&kid).await.ok_or(AuthError::UnknownKid)?; // DecodingKey from JWKS

    let mut validation = Validation::new(Algorithm::RS256); // pinned, not from header
    validation.set_issuer(&[expected_issuer]);   // https://cognito-idp.{region}.amazonaws.com/{poolId}
    validation.set_audience(&[expected_client_id]);

    let data = decode::<Claims>(token, &key, &validation)?;
    Ok(data.claims)
}
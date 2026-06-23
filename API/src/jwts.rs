use std::pin::Pin;
use actix_web::{FromRequest, HttpRequest};
use actix_web::dev::Payload;
use actix_web::error::ErrorUnauthorized;
use actix_web::web::Data;
use jsonwebtoken::{decode, decode_header, Algorithm, Validation};
use uuid::Uuid;
use crate::routes::user::AuthUser;

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
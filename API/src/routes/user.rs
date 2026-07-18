use std::pin::Pin;
use std::thread;
use actix_web::{get, web, FromRequest, HttpRequest, Responder};
use actix_web::dev::Payload;
use actix_web::error::ErrorUnauthorized;
use actix_web::web::Json;
use chrono::{DateTime, Utc};
use uuid::Uuid;
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use web::Data;
use jsonwebtoken::{decode, decode_header, DecodingKey, Validation, Algorithm};
use sqlx::__rt::sleep;
use crate::jwks::AuthUser;
use crate::routes;
use std::time::Duration;

#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct UserID(Uuid);
#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct OrgId(Uuid);

#[derive(sqlx::Type, Serialize, Deserialize, Clone, Debug, PartialEq)]
pub struct UserPrivateProfile{
    pub id: UserID,
    pub email: String,
    pub username: Option<String>,
    pub joined_date:DateTime<Utc>,
    pub org:Option<OrgId>,
    pub cognito_sub:Uuid,
}


pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/user")
            .service(user_get_private_profile)

    );
}

#[get("/get_private_profile/")]
pub async fn user_get_private_profile(pool: Data<PgPool>,user: AuthUser) -> impl Responder{
    Json(user.get_user_data())
}
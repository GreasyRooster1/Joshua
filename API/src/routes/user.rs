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

pub struct UserPrivateProfile{
    id: UserID,
    email: String,
    username: Option<String>,
    joined_date:DateTime<Utc>,
    org:Option<OrgId>,
    cognito_sub:Uuid,
}


pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/user")
            .service(get_user_private_profile)

    );
}


//generate profile if it doesn't exist here
#[get("/get_user_private_profile/")]
pub async fn get_user_private_profile(pool: Data<PgPool>,user: AuthUser) -> impl Responder{
    user.
}
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
use crate::{routes, AppState};
use std::time::Duration;
use crate::error::ApiError;

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
            .service(user_get_org_name)

    );
}

#[get("/get_private_profile/")]
pub async fn user_get_private_profile(pool: Data<AppState>,user: AuthUser) -> impl Responder{
    Json(user.get_user_data())
}

#[get("/get_org_name/")]
pub async fn user_get_org_name(pool: Data<AppState>,user: AuthUser) -> Result<Json<String>,ApiError>{
    let id = user.get_user_data().id;
    let name: String = sqlx::query_scalar!(
        "SELECT o.name
       FROM users u
       JOIN organizations o ON o.id = u.org
       WHERE u.id = $1",
        id.0
    ).fetch_one(&pool.pool).await?;

    Ok(Json(name))
}
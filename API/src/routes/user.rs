use actix_web::{get, web, Responder};
use chrono::{DateTime, Utc};
use uuid::Uuid;
use serde::{Deserialize, Serialize};

#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct UserID(Uuid);
#[derive(sqlx::Type, Serialize, Deserialize, Copy, Clone, Debug, PartialEq)]
#[sqlx(transparent)]
pub struct OrgId(Uuid);

pub struct UserPrivateProfile{
    email: String,
    username: String,
    joined_data:DateTime<Utc>,
}

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/user")
            .service(get_user_private_profile())
    );
}

#[get("/get_user_private_profile/{user_id}")]
pub async fn get_user_private_profile(user_id: web::Path<String>) -> impl Responder{
    sqlx::query_as!(
        User,
        "INSERT INTO users (cognito_sub, email)
         VALUES ($1, $2)
         ON CONFLICT (cognito_sub) DO UPDATE SET email = EXCLUDED.email
         RETURNING *",
        claims.sub, claims.email
    ).fetch_one(&pool).await?
}

pub fn generate_user_data(){

}
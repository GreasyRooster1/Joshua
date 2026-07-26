use actix_web::{get, web, Responder};
use actix_web::web::{Data, Json};
use crate::AppState;
use crate::error::ApiError;
use crate::jwks::AuthUser;
use crate::routes::user::{user_get_org_name, user_get_private_profile};

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/org")
            .service(org_get_student_count)

    );
}

#[get("/get_student_count/")]
pub async fn org_get_student_count(pool: Data<AppState>,user: AuthUser) -> Result<Json<i64>,ApiError>{
    let org = user.get_user_data().org.expect("user has no organization");
    let count: Option<i64> = sqlx::query_scalar!(
        "SELECT COUNT(*)
        FROM users
        WHERE org=$1 AND org_role='student';",
        org.0
    ).fetch_one(&pool.pool).await?;

    Ok(Json(count.expect("Failed to get student count")))
}
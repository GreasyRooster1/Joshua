mod routes;
pub mod jwts;
mod error;

use sqlx::postgres::PgPoolOptions;
use actix_web::{get, web, App, HttpServer, Responder};
use sqlx::PgPool;
use crate::jwts::JwkData;

struct AppState {
    pool: PgPool,
    jwk_data: JwkData
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    if let Err(e) = dotenvy::dotenv() {
        println!("cargo:warning=Could not load .env file: {}", e);
    }

    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&std::env::var("DATABASE_URL").unwrap())
        .await
        .expect("failed to create pool");

    let pool = web::Data::new(AppState{
        pool,
    });

    HttpServer::new(move || {
        App::new()
            .app_data(pool.clone())
            .service(version)
            .configure(routes::user::configure)
    })
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}

#[get("/version")]
async fn version() -> impl Responder {
    env!("CARGO_PKG_VERSION")
}
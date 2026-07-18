mod routes;
pub mod jwks;
mod error;

use sqlx::postgres::PgPoolOptions;
use actix_web::{get, web, App, HttpServer, Responder};
use sqlx::PgPool;
use crate::error::ApiError;
use crate::jwks::JwksCache;
use actix_cors::Cors;
use actix_web::http::header;

const EXPECTED_CLIENT_ID: &'static str =env!("COGNITO_CLIENT_ID");

struct AppState {
    pool: PgPool,
    jwks_cache: JwksCache
}


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    if let Err(e) = dotenvy::dotenv() {
        println!("cargo:warning=Could not load .env file: {}", e);
    }

    println!("connecting to pool...");
    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&std::env::var("DATABASE_URL").unwrap())
        .await
        .expect("failed to create pool");

    let pool = web::Data::new(AppState{
        pool,
        jwks_cache: JwksCache::new("us-west-2", "us-west-2_S5CN4oDwh", EXPECTED_CLIENT_ID.parse().unwrap()).await.expect("failed to create JWKS cache")
    });

    println!("starting server...");

    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:5173")   // explicit, not permissive
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE"])
            .allowed_headers(vec![header::AUTHORIZATION, header::CONTENT_TYPE])
            .max_age(3600);
        App::new()
            .wrap(cors)
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
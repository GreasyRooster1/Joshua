mod routes;

use sqlx::postgres::PgPoolOptions;
use actix_web::{get, web, App, HttpServer, Responder};
use sqlx::PgPool;

struct AppState {
    pool: PgPool,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&std::env::var("DATABASE_URL").unwrap())
        .await
        .expect("failed to create pool");

    let pool = web::Data::new(AppState{
        pool
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
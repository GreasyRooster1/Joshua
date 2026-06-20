use actix_web::web;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/admin")
            .route("", web::get().to(list))
            .route("", web::post().to(create))
            .route("/{id}", web::get().to(get_one))
            .route("/{id}", web::put().to(update))
            .route("/{id}", web::delete().to(delete)),
    );
}
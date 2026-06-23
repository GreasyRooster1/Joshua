use actix_web::http::StatusCode;
use actix_web::{HttpResponse, ResponseError};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ApiError {
    #[error("resource not found")]
    NotFound,

    #[error("invalid input: {0}")]
    BadRequest(String),

    #[error("sqlx error")]
    Database(#[from] sqlx::Error),

    #[error("internal server error")]
    Internal,

    #[error("auth error")]
    AuthError(#[from] AuthError),
}

#[derive(Error, Debug)]
pub enum AuthError{
    #[error("reqwest error")]
    ReqwestError(#[from] reqwest::Error),

    #[error("json web token error")]
    JsonWebTokenError(#[from] jsonwebtoken::errors::Error),

    #[error("unknown kid")]
    UnknownKid,

    #[error("no kid")]
    NoKid,

    #[error("wrong token type")]
    WrongTokenType,

    #[error("wrong token client")]
    WrongTokenClient,

    #[error("uuid parse error")]
    UUIDParseError(#[from] uuid::Error),
}

impl ResponseError for ApiError {
    fn status_code(&self) -> StatusCode {
        match self {
            ApiError::NotFound => StatusCode::NOT_FOUND,
            ApiError::BadRequest(_) => StatusCode::BAD_REQUEST,
            ApiError::Database(_) | ApiError::Internal => StatusCode::INTERNAL_SERVER_ERROR,
            ApiError::AuthError(_) => StatusCode::UNAUTHORIZED,
        }
    }

    fn error_response(&self) -> HttpResponse {
        HttpResponse::build(self.status_code())
            .json(serde_json::json!({ "error": self.to_string() }))
    }
}
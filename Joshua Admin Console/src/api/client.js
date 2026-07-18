import axios from 'axios';
import {useAuth} from "react-oidc-context";
import {useEffect, useRef, useState} from "react";

let currentToken = null;
export function setAuthToken(t) { currentToken = t; }

const api = axios.create({
    baseURL: import.meta.env.PROD?"PRODAPI":"http://127.0.0.1:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});
console.log('api instance created', api);
export function useApiAuth() {
    const auth = useAuth();
    const token = auth.user?.access_token;

    setAuthToken(token ?? null);

    return !!token;
}

api.interceptors.request.use((config) => {
    if (currentToken) config.headers.Authorization = `Bearer ${currentToken}`;
    return config;
});

export function req(promise){
    promise.then(response=>response.data)
}

export default api;
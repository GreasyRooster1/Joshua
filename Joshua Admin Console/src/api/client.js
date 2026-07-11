import axios from 'axios';
import {useAuth} from "react-oidc-context";
import {useEffect, useRef} from "react";

const api = axios.create({
    baseURL: import.meta.env.PROD?"PRODAPI":"http://localhost:8000",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Automatically append authorization tokens if they exist
api.interceptors.request.use((config) => {
    const auth = useAuth();
    const token = auth.user?.access_token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export function useApiAuth() {
    const auth = useAuth();
    const token = auth.user?.access_token;

    useEffect(() => {
        const id = api.interceptors.request.use((config) => {
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
        return () => api.interceptors.request.eject(id);
    }, [token]);
}

export default api;
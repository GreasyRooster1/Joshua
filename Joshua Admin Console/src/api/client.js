import axios from 'axios';
import {useAuth} from "react-oidc-context";
import {useEffect, useRef, useState} from "react";

const api = axios.create({
    baseURL: import.meta.env.PROD?"PRODAPI":"http://127.0.0.1:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});

export function useApiAuth() {
    const auth = useAuth();
    const token = auth.user?.access_token;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const id = api.interceptors.request.use((config) => {
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
        setReady(true);
        return () => {
            api.interceptors.request.eject(id);
            setReady(false);
        }
    }, [token]);

    return ready;
}

export function req(promise){
    return ()=>{
        promise.then(response=>{
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} error on ${response} `)
            }

            return response.data
        })
    }
}

export default api;
import axios from 'axios';
import {useAuth} from "react-oidc-context";

const apiClient = axios.create({
    baseURL: import.meta.env.PROD?"PRODAPI":"http://localhost:8000",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Automatically append authorization tokens if they exist
apiClient.interceptors.request.use((config) => {
    const auth = useAuth();
    const token = auth.user?.access_token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-west-2.amazonaws.com/us-west-2_S5CN4oDwh",
    client_id: "2inig90lqfr4rrfl8dpe3ahlru",
    redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
    response_type: "code",
    scope: "email openid phone",
};


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider {...cognitoAuthConfig}>
            <BrowserRouter>
                <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial} >
                    <App />
                </DevSupport>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>,
)
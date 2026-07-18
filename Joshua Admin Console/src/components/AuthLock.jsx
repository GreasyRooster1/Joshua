import React from 'react';
import {useAuth} from "react-oidc-context";
import {useApiAuth} from "../api/client.js";

function AuthLock(props) {
    const auth = useAuth();
    const apiReady = useApiAuth();

    const signOutRedirect = () => {
        const clientId = "2inig90lqfr4rrfl8dpe3ahlru";
        const logoutUri = window.location.hostname;
        const cognitoDomain = "https://us-west-2s5cn4odwh.auth.us-west-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading || !apiReady) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (!auth.isAuthenticated) {
        auth.signinRedirect();
        return <div>Logging you in...</div>;
    }

    if (auth.isAuthenticated && !auth.error && !auth.isLoading) {
        return (
            <>
                {props.children}
            </>
        );
    }

    console.log(auth)

    return (
        <>
            An unknown error occurred!
        </>
    );
}

export default AuthLock;
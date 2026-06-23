import React from 'react';
import {useAuth} from "react-oidc-context";

function AuthLock(props) {
    const auth = useAuth();

    const signOutRedirect = () => {
        const clientId = "2inig90lqfr4rrfl8dpe3ahlru";
        const logoutUri = "<logout uri>";
        const cognitoDomain = "https://us-west-2s5cn4odwh.auth.us-west-2.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated && !auth.error && !auth.isLoading) {
        return (
            <>
                {props.children}
            </>
        );
    }

    return (
        <>
            An unknown error occurred!
        </>
    );
}

export default AuthLock;
import React from 'react';
import Loading from "./Loading.jsx";

function Await(props) {
    return (
        <>{props.loading ? <Loading/> : props.children}</>
    );
}

export default Await;
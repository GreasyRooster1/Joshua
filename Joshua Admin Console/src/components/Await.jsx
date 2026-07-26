import React, {useEffect, useState} from 'react';
import Loading from "./Loading.jsx";

function Await(props) {
    const [time,setTime] = useState(0);

    useEffect(() => {
        let intervalId;
        if (props.loading) {
            intervalId = setInterval(() => setTime((t)=>t+10), 10);
        }
        return () => clearInterval(intervalId);
    }, [props.loading, time]);

    if(!props.loading){
        return (<>{props.children}</>)
    }
    if(time < 500){
        return (<><span style={{opacity:0}}>m</span></>)
    }
    if(time < 1_000){
        return (<><Loading/></>)
    }
    if(time < 10_000){
        return (<><Loading/> Please wait...</>)
    }
    return (<><Loading/> Check network!</>)
}

export default Await;
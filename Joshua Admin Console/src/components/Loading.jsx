import React from 'react';
import {SyncLoader} from 'react-spinners'


function Loading(props) {
    return (
        <SyncLoader size={6} cssOverride={{marginTop:"-36px"}}/>
    );
}

export default Loading;
import React from 'react';
import {ScaleLoader} from "react-spinners";

const Loader = () => {
    return (
        <div style={{height: "50vh", alignItems: "center", display: "flex", justifyContent: "center", padding: "5% 0"}}>
            <ScaleLoader color={'#FFD354'} size={56}/>
        </div>
    );
};

export default Loader;
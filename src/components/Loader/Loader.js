import React from 'react';
import {HashLoader} from "react-spinners";

const Loader = () => {
    return (
        <div style={{height: "50vh", alignItems: "center", display: "flex", justifyContent: "center", padding: "5% 0"}}>
            <HashLoader color={'#00A171'} size={56}/>
        </div>
    );
};

export default Loader;
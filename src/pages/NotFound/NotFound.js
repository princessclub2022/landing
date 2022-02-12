import React from 'react';
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();

    return (
        <div style={{padding: "100px"}}>
          Not Found
          Not Found
        </div>
    );
};

export default NotFound;
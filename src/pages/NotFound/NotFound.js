import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {getInfoFromCms} from "../../api_requests";
import Loader from "../../components/Loader/Loader";

const NotFound = () => {
    const {t} = useTranslation();
    const [singleCategory, setSingleCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        getInfoFromCms("/main", setSingleCategory, setError, setLoading)
    },[])
    if (singleCategory.length === 0 || loading) return <Loader/>
    return (
        <div>
            {`${singleCategory.button_text}`}
        </div>
    );
};

export default NotFound;
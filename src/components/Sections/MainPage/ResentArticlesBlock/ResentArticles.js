import React, {useEffect, useState} from 'react';
import {getInfoFromCms} from "../../../../api_requests";
import Loader from "../../../Loader/Loader";
import {useErrorHandler} from "react-error-boundary";
import ArticleBlock from "../../SingleCategoty/ArticleBlock/ArticleBlock";
import "./ResentArticles.scss";
import {useTranslation} from "react-i18next";

const ResentArticles = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleError = useErrorHandler();
    const {t} = useTranslation();


    useEffect(() => {
        getInfoFromCms('/blogmedias?_sort=published_at:desc', setPosts, setError, setLoading)
    }, []);

    const lastPosts = posts.length > 0 ? posts.slice(0, 3) : [];
    if (loading || posts.length === 0) return <Loader/>
    if (error) handleError(error);


    return (
        <div className={"main__page__resent__articles__wrapper"}>
            <h6 className="resent__articles__title">{t("resentArticlesBlock")}</h6>
            <div className={"main__page__resent__articles__container"}>
                {lastPosts.map(el => <ArticleBlock el={el} key={el.id}/>)}
            </div>
        </div>
    );
};

export default ResentArticles;
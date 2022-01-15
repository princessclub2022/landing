import React, {useEffect, useState} from 'react';
import "./SingleCategory.scss";
import {useParams} from "react-router-dom";
import {getInfoFromCms} from "../../api_requests";
import StepsRoutes from "../../components/StepRoutes/StepsRoutes";
import ArticleBlock from "../../components/Sections/SingleCategoty/ArticleBlock/ArticleBlock";
import Pagination from "../../components/Pagination/Pagination";
import QuestionSection from "../../components/Sections/QuestionSection/QuestionSection";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "react-spinners/BarLoader";

const title = "Do you still need help?"

const SingleCategory = ({locale, singleCategory}) => {
    console.log("SingleCategory ================================")
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);
    const [enCategory, setEnCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {slug} = useParams();
    // const locale = localStorage.getItem("i18nextLng") || "en";

    useEffect(() => {
        getInfoFromCms(`/categories?_locale=${locale}`, setEnCategory, setError, setLoading);
        // getInfoFromCms(`/categories?_locale=en`, setEnCategory, setError, setLoading);
    },[]);

    if (document.querySelector(".lang__dropdown")) {
        document.querySelector(".lang__dropdown").classList.remove("hide");
    }

    const isExactCategory = singleCategory.length > 0 ? singleCategory.find(cat => cat.category_link === `/${slug}/`) : [];
    const allArticles = isExactCategory.articles || [];

    if (singleCategory.length === 0 || error) return <ErrorPage locale={locale} />
    if (loading) return <Loader />

    const filteredArticles = allArticles.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    //Get currentPosts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfLFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = filteredArticles.slice(indexOfLFirstPost, indexOfLastPost);
    const totalPosts = filteredArticles.length;

    return (
        <div className={"singleCategory__page__wrapper"}>
            <StepsRoutes
                className={"singleCategory__page"}
                locale={locale}
                linkTwoText={isExactCategory.name || ` `}
            />
            <div className={"singleCategory__page__container"}>
                <h1 className="singleCategory__page__title">{isExactCategory.name || ``}</h1>
                <div className={"singleCategory__page__grid"}>
                    {currentPosts.length > 0 ? currentPosts.map(post => <ArticleBlock key={post.id}
                                                                                      locale={locale}
                                                                                      el={post}
                    />) : null}
                </div>
                <Pagination
                    postPerPage={postPerPage}
                    totalPosts={totalPosts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    indexOfLastPost={indexOfLastPost}
                    info/>
                <QuestionSection link={"/help-form/"} title={title} classNameButton={"main__page__question"}/>
            </div>
        </div>
    );
};

export default SingleCategory;
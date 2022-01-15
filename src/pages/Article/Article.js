import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "./Article.scss";
import Loader from "react-spinners/BarLoader";
import StepsRoutes from "../../components/StepRoutes/StepsRoutes";
import FeedBackBlock from "../../components/Sections/FeedBackBlock/FeedBackBlock";
import Modal from "../../components/Modal/Modal";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import smile from "../../assets/pictures/Smile.svg";
import {useTranslation} from "react-i18next";
import {getInfoFromCms} from "../../api_requests";
import {useErrorHandler} from "react-error-boundary";
import ErrorPage from "../ErrorPage/ErrorPage";


const Article = ({locale}) => {
    console.log("Article--------------------------------------------------")
    const [active, setActive] = useState(false);
    const [positive, setPositive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState([]);
    const {slug} = useParams();
    const {t} = useTranslation();
    const handleError = useErrorHandler();

    console.log(slug);
    useEffect(() => {
        // document.querySelector(".lang__dropdown").classList.add("hide");
        getInfoFromCms(`/blogs?_locale=${locale}`, setArticles, setError, setLoading);
        // getInfoFromCms(`/blogs?slug=${slug}&_locale=${locale}`, setArticle, setError, setLoading);
    }, [locale]);

    const articleInfo = articles.find(el => el.common_slug_is_exact_english_slug === slug);
    console.log(articleInfo);
    if (articles.length === 0 || loading) return <Loader/>
    if (error) {
        handleError(error)
        return <ErrorPage locale={locale}/>
    }


    return (
        <>
            {articleInfo ?
                <>
                    <div className={"article__main__wrapper"}>
                        <StepsRoutes
                            className={"article__routes__steps"}
                            locale={locale}
                            linkTwo={articleInfo.category[0].category_link || ``}
                            linkTwoText={articleInfo.category[0].name || ``}
                            linkThreeText={articleInfo ? articleInfo.title : ''}
                        />
                        <div className={"article__body"}>
                            <div className={"kk"}>{parse(sanitizeHtml(articleInfo.blog_body))}</div>
                            <FeedBackBlock setActive={setActive} setPositive={setPositive}/>
                        </div>

                    </div>
                    <Modal active={active} setActive={setActive} layer>
                        <>{positive ? <>
                                <img src={smile} alt={"smile"} className="modal__picture"/>
                                <p className="modal__text">{t("feedback.modalAnswerYes")}</p>
                            </>
                            : <>
                                <p className="modal__text">{t("feedback.modalAnswerNo")}</p>
                                <MainButton classNameButton={"modal__button"} link={"/form/"}
                                            btnText={t("mainButton")}/>
                            </>}
                        </>
                    </Modal>
                </>
                : <ErrorPage/>}
        </>
    );
};

export default Article;
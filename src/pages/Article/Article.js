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
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import ArticleBody from "./ArticleBody";


const Article = ({locale}) => {
    console.log("Article--------------------------------------------------")
    const [active, setActive] = useState(false);
    const [isClickedDropDown, setIsClickedDropDown] = useState(true);
    const [positive, setPositive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState([]);
    const {slug} = useParams();
    const {t} = useTranslation();
    const handleError = useErrorHandler();

    useEffect(() => {
        getInfoFromCms(`/blogs?_locale=${locale}`, setArticles, setError, setLoading);
    }, [locale]);

    const articleInfo = articles.find(el => el.common_slug_is_exact_english_slug === slug);

    if (articles.length === 0 || loading) return <Loader/>
    if (error) {
        handleError(error)
        return <ErrorPage locale={locale}/>
    }

    const blogStructureLinks = articleInfo.article_block.length > 0 ? articleInfo.article_block.filter(el => (el.header !== null && el.header !== "")) : [];

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
                            linkThreeText={articleInfo ? articleInfo.main_title : ''}
                        />
                        {/*// Body of Article*/}
                        <div className={"article__body__container"}>
                            <h1 className={"article__main__title"}>{articleInfo.main_title}</h1>
                            {articleInfo.text_after_main_header ? <div className="blog__structure__text">
                                {/*{parse(sanitizeHtml(articleInfo.text_after_main_header))}*/}
                                {parse(sanitizeHtml(articleInfo.text_after_main_header, {
                                    allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "img", "p", "iframe", "span"],
                                    allowedAttributes: {'*': ['href', 'alt', "src", "style"]},
                                    allowedSchemes: ['http', 'https'],
                                    allowedSchemesByTag: {
                                        img: ['data', "src"],
                                    },
                                }))}
                            </div> : null}
                            {blogStructureLinks.length > 1 ?
                            <CustomSelect
                                onClick={() => setIsClickedDropDown(!isClickedDropDown)}
                                className={"blog__structure__links"}
                                list={blogStructureLinks}
                                isClickedDropDown={isClickedDropDown}
                                setIsClickedDropDown={setIsClickedDropDown}
                                text_header={t("article.blog_title_link")}
                            /> : null}
                            {articleInfo.text_after_blog_structure ? <div className="blog__structure__text">
                                {/*{parse(sanitizeHtml(articleInfo.text_after_blog_structure))}*/}
                                {parse(sanitizeHtml(articleInfo.text_after_blog_structure, {
                                    allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "img", "p", "iframe", "span"],
                                    allowedAttributes: {'*': ['href', 'alt', "src", "style"]},
                                    allowedSchemes: ['http', 'https'],
                                    allowedSchemesByTag: {
                                        img: ['data', "src"],
                                    },
                                }))}
                            </div> : null}
                            <div className="article__body">
                                {articleInfo.article_block.length > 0 ? articleInfo.article_block.map(i => <ArticleBody key={i.id} item={i}/>) : null}
                            </div>
                            <FeedBackBlock setActive={setActive} setPositive={setPositive}/>
                        </div>

                    </div>

                    {/*// Modal*/}
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
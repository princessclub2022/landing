import React from 'react';
import "./ArticleBlock.scss";
import DetailsButton from "../../../Buttons/DetailsButton/DetailsButton";
import {useTranslation} from "react-i18next";
import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';
import {useHistory} from "react-router-dom";
import noPhoto from "../../../../assets/pictures/nophoto.svg"


const ArticleBlock = ({el, locale}) => {
    const {t} = useTranslation();
    const history = useHistory();
    const handleClick = () => {
        history.push(`${locale === "en" ? "" : `/${locale}`}/${el.common_slug_is_exact_english_slug}/`)
        // history.push(`/${el.common_slug_is_exact_english_slug}/`)
        // history.push(`${locale === "en" ? "" : `/${locale}`}/${el.slug}/`)
    }
    return (
        // <div className="article__block__wrapper" onClick={() => history.push(`${el.common_slug_is_exact_english_slug}/`)}>
        <div className="article__block__wrapper" onClick={() => handleClick()}>
            <div className="article__block__image" style={{
                background: `center / cover no-repeat white url(${el.main_image.url === null ? noPhoto : el.main_image.url})`
            }}/>
            <h6 className="article__block__title">{el.title}</h6>
            <div className="article__block__short__text">{parse(sanitizeHtml(el.blog_body))}</div>
            {/*<div className="article__block__short__text">{parse(sanitizeHtml(el.description))}</div>*/}
            <DetailsButton
                className="article__block"
                text={(t("detailsButton"))}
                link={`${locale === "en" ? "" : `/${locale}`}/${el.slug}/`}
            />
        </div>
    );
};

export default ArticleBlock;
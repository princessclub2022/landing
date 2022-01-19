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
        // history.push(`${locale === "en" ? "" : `/${locale}`}/${el.slug}/`)
    }
    return (
        <div className="article__block__wrapper" onClick={() => handleClick()}>
            <div className="article__block__image" style={{
                background: `center / cover no-repeat white url(${el.main_image.url === null ? noPhoto : el.main_image.url})`
            }}/>
            <h6 className="article__block__title">{el.main_title}</h6>
            {el.text_after_main_header !== null ? <div className="article__block__short__text">{parse(sanitizeHtml(el.text_after_main_header))}</div> :
                el.article_block.length > 0 ? <div className="article__block__short__text">{parse(sanitizeHtml(el.article_block[0].text_before_picture))}</div> : ""}
            <DetailsButton
                className="article__block"
                text={(t("detailsButton"))}
                link={`${locale === "en" ? "" : `/${locale}`}/${el.slug}/`}
            />
        </div>
    );
};

export default ArticleBlock;
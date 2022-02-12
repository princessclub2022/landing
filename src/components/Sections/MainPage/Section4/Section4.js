import React from 'react';
import BlockTitle from "../../../BlockTitle/BlockTitle";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import "./Section4.scss";

const Section4 = ({showTitle, locale}) => {
    const {t} = useTranslation();
    if(!locale) locale = localStorage.getItem("i18next") || "ru";
    return (
        <div className={"main__gallery__wrapper"}>
            {showTitle ? <BlockTitle title={t("mainPage.gallery.title")}/> : null}
            <div className="main__gallery__list">
                <Link to={locale === "ru" ? "/galereya/" : locale === "en" ? "/en/gallery/" : "/ua/galereya/"} className="main__gallery__item">
                    <p className="main__gallery__item__title">{t("mainPage_gallery_list.0.title")}</p>
                </Link>
                <Link to={locale === "ru" ? "/galereya/" : locale === "en" ? "/en/gallery/" : "/ua/galereya/"}className="main__gallery__item">
                    <p className="main__gallery__item__title">{t("mainPage_gallery_list.1.title")}</p>
                </Link>
                <Link to={locale === "ru" ? "/galereya/" : locale === "en" ? "/en/gallery/" : "/ua/galereya/"} className="main__gallery__item">
                    <p className="main__gallery__item__title">{t("mainPage_gallery_list.2.title")}</p>
                </Link>
            </div>
        </div>
    );
};

export default Section4;
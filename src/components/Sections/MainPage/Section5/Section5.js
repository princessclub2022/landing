import React from 'react';
import "./Section5.scss";
import BlockTitle from "../../../BlockTitle/BlockTitle";
import {useTranslation} from "react-i18next";
import pic1 from "../../../../assets/pictures/MainPage/Gallery/1.svg";
import pic2 from "../../../../assets/pictures/MainPage/Gallery/2.svg";
import {Link} from "react-router-dom";

const pictures = [pic1, pic2];

const Section5 = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18next") || "ru";
    return (
        <div className={"karaoke__page__wrapper"}>
            <div className={"karaoke__page__container"}>
                <BlockTitle title={t('mainPage.karaoke.title')} className={"karaoke__page__title"}/>
                <p className="karaoke__page__description">{t('mainPage.karaoke.subtitle')}</p>
                <div className="karaoke__page__info">
                    {t("mainPage__karaoke__list", {returnObjects: true}).map((el, index) => {
                        return (
                            <div className="mainPage__karaoke__list__item" key={index}>
                                <img src={pictures[index]} alt="karaoke" className="mainPage__karaoke__list__pic"/>
                                <div className="mainPage__kaaraoke__list__text">
                                    <p className="karaoke__list__item__title">{el.title}</p>
                                    <p className="karaoke__list__item__description">{el.description}</p>
                                    <Link className="karaoke__list__item__link" to={`${locale === "ru" ? "" : `/${locale}`}/el.link/`}>
                                        {el.linkText}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Section5;
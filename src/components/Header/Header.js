import React from 'react';
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Logo from "../Logo/logo";
import "./Header.scss";
import MainButton from "../Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";
import {Domaine, KyrrexCom} from "../../env";

const Header = ({acceptedLang, locale}) => {
    const {t} = useTranslation();
    return (
        <div className="header__wrapper">
            <Logo locale={locale}/>
            <div className="header__link__container">
                <p className="header__link">{t("header.linkText")}</p>
                <a href={KyrrexCom} className="header__link" target="_blank"
                   rel="noreferrer">{t("header.siteLink", {link: Domaine})}</a>
            </div>
            <MainButton classNameButton={"header__button"} btnText={t("mainButton")} link={"/help-form/"}/>
            <LangSwitcher acceptedLang={acceptedLang} locale={locale}/>
        </div>
    );
};

export default Header;
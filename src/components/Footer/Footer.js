import React from 'react';
import Logo from "../Logo/logo";
import SocialButtons from "../Buttons/SocialButtons/SocialButtons";
import {useTranslation} from "react-i18next";
import "./Footer.scss";

const Footer = ({locale}) => {
    const {t} = useTranslation();
    return (
        <div className={"footer__main__wrapper"}>
            <div className={"footer__container"}>
                <Logo locale={locale} className={"footer__logo"}/>
                <SocialButtons className={"footer__buttons"}/>
                <div className="footer__text">
                    <div className="footer__text__inner">
                        <span className="footer__date">
                            {t("footer.before")}
                            <p>{`2018 - ${new Date().getFullYear()} .`}</p>
                        </span>
                        <span className="footer__details">{t("footer.details")}</span>
                    </div>
                    <p className="footer__rights">{t("footer.after")}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
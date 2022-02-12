import React from 'react';
import Logo from "../Logo/logo";
import SocialButtons from "../Buttons/SocialButtons/SocialButtons";
import {useTranslation} from "react-i18next";
import "./Footer.scss";
import FooterNavBar from "./FooterNavBar";
import MainButton from "../Buttons/MainButton/MainButton";
import Separator from "../Separator";
import dmca from "../../assets/footerDMCA.svg";

const Footer = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";
    return (
        // <div className={"footer__main__wrapper"}>
        //     <div className={"footer__container"}>
        //         <Logo locale={locale} className={"footer__logo"}/>
        //         <SocialButtons className={"footer__buttons"}/>
        //         <div className="footer__text">
        //             <div className="footer__text__inner">
        //                 <span className="footer__date">
        //                     {t("footer.before")}
        //                     <p>{`2018 - ${new Date().getFullYear()} .`}</p>
        //                 </span>
        //                 <span className="footer__details">{t("footer.details")}</span>
        //             </div>
        //             <p className="footer__rights">{t("footer.after")}</p>
        //         </div>
        //     </div>
        // </div>
        <div className={"footer__main__wrapper"}>
            <div className={"footer__container"}>
                <div className="grid__footer__outer">
                <div className="grid__footer">
                    <Logo locale={locale} className={"footer__main__logo"}/>
                    <FooterNavBar locale={locale}/>
                </div>
                <MainButton
                    classNameButton={"footer__main__btn"}
                    link={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                        locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                    btnText={t("buttons.reserveTable")}
                />
                </div>
                <Separator className={"comming_soon"}/>
                <SocialButtons className={"footer__buttons"}/>
                <div className="footer__text">
                    <div className="footer__text__inner">
                        <span className="footer__date">
                            {t("footerMain.rightsBeforeDate")}
                            <p>{`2018 - ${new Date().getFullYear()} .`}</p>
                        </span>
                        <span className="footer__details">{t("footerMain.rightsAfterDate")}</span>
                    </div>
                    <img src={dmca} alt="dmca-protected" className="footer__main__pic"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
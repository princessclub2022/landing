import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const FooterNavBar = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";
    return (
        <div className={"footer__main__navbar"}>
            <ul className={"footer__navbar"}>
                {/*{t("footerNavBar", {returnObjects: true}).map((el, index) => {*/}
                {/*    return (*/}
                {/*        <li className="footer__navbar__item" key={index}>*/}
                {/*            <Link href={el.link} className="footer__navbar__item__link">{el.title}</Link>*/}
                {/*        </li>*/}
                {/*    )*/}
                {/*})}*/}
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/about/` : `/${locale}/about/`}
                          className="footer__navbar__item__link">{t("footerNavBar.0.title")}</Link>
                </li>
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/chlenstvo-v-klube/` :
                        locale === "ua" ? `/ua/chlenstvo-v-klubi/` : `/en/membership-card/`}
                          className="footer__navbar__item__link">{t("footerNavBar.1.title")}</Link>
                </li>
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/karaoke/` : `/${locale}/karaoke/`}
                          className="footer__navbar__item__link">{t("footerNavBar.2.title")}</Link>
                </li>
                <li className="footer__navbar__item">
                    <a href={"https://work.princessclub.kiev.ua/"}
                       className="footer__navbar__item__link"
                       target="_blank"
                       rel="noreferrer">{t("footerNavBar.3.title")}</a>
                </li>
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/den-rozhdeniya-v-strip-klube/` :
                        locale === "ua" ? `/ua/den-narodjennya-v-strip-klubi/` : `/en/birthday-at-strip-club/`}
                          className="footer__navbar__item__link">{t("footerNavBar.4.title")}</Link>
                </li>
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/malchishnik/` :
                        locale === "ua" ? `/ua/malchishnik/` : `/en/bachelor-party/`}
                          className="footer__navbar__item__link">{t("footerNavBar.5.title")}</Link>
                </li>
                <li className="footer__navbar__item">
                    <Link to={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                        locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                          className="footer__navbar__item__link">{t("footerNavBar.6.title")}</Link>
                </li>
            </ul>

        </div>
    );
};

export default FooterNavBar;
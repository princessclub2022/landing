import React, { useRef} from 'react';
import {language} from "../../../data/lang";
import "./LangSwitcher.scss"
import i18n from "i18next";
import {Link} from "react-router-dom";


const LangSwitcher = ({locale, pathname, className=''}) => {
    const ref = useRef();
    if(!pathname) pathname = window.location.pathname || "/";
    if(!locale) locale = localStorage.getItem("i18nextLng") || "en"
    const stripLocale = (pathname, locale) => pathname.replace(`/${locale}`, '');

    return (
        <div className={`lang__dropdown ${className}`} ref={ref}>
                <div className={`custom__select__dropdown__menu ${className}`}>
                    {language.map(({code, shortName}) => {
                            return (
                                <Link
                                    className={`custom__select__menu__item ${locale === code ? "is-active" : ''}`} key={code}
                                    onClick={() => i18n.changeLanguage(code)}
                                    to={code === "ru" ? `${stripLocale(pathname, locale)}` : `/${code}${stripLocale(pathname, locale)}`}
                                >
                                    {shortName}
                                </Link>
                            )
                    })}
                </div>
        </div>
    );
};

export default LangSwitcher;
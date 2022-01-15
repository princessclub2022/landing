import React, {useEffect, useRef, useState} from 'react';
import {defaultLanguage, language} from "../../../data/lang";
import "./LangSwitcher.scss"
import {toFirstLatterUpperCase} from "../../helperFunctions/style";
import i18n from "i18next";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import {Link} from "react-router-dom";


const LangSwitcher = ({acceptedLang, locale}) => {
    const [selectHeader, setSelectHeader] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("En");
    const ref = useRef();

    const pathname = window.location.pathname || "/";
    // const locale = localStorage.getItem("i18nextLng") || "en";

    const resize = () => (window.innerWidth >= 1000) ? setDesktop(true) : setDesktop(false);
    const checkerIfClickOutside = (e) => {
        if (selectHeader && ref.current && !ref.current.contains(e.target)) {
            setSelectHeader(false)
        }
    }
    const stripLocale = (pathname, locale) => pathname.replace(`/${locale}`, '');

    useEffect(() => {
        if (!desktop) {
            setSelectedLanguage(() => toFirstLatterUpperCase(locale || "en"));
            // setSelectedLanguage(() => toFirstLatterUpperCase(localStorage.getItem("i18nextLng") || "en"));
        } else {
            const langObject = language.find(i => locale.toUpperCase() === i.code.toUpperCase());
            // const langObject = language.find(i => localStorage.getItem("i18nextLng").toUpperCase() === i.code.toUpperCase());
            setSelectedLanguage(langObject.name);
        }
        document.addEventListener('click', checkerIfClickOutside);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize)
            document.removeEventListener('click', checkerIfClickOutside);
        }
    }, [desktop, selectHeader]);

    const handleChangeLang = (e, code) => {
        i18n.changeLanguage(code);
        // if (!code) code = "en"
        const findSelectedLng = language.find(i => code.toUpperCase() === i.code.toUpperCase());
        setSelectedLanguage(desktop ? findSelectedLng.name : toFirstLatterUpperCase(e.target.innerText))
        setSelectHeader(false)
    }


    const langsMenu = language.filter(el => acceptedLang.find(i => (i.code === el.code && i.accepted === true) ? el : false));

    const langList = (langsMenu && langsMenu.length >= 2) ? langsMenu : defaultLanguage;
    return (
        <div className={"lang__dropdown"} ref={ref}>
            <div className={`custom__select ${selectHeader ? "is-active" : ''}`}>
                <div className="custom__select__header" onClick={() => setSelectHeader(!selectHeader)}>
                    <span
                        className="custom__select__current">{(selectedLanguage !== null || true) ? selectedLanguage : "En"}</span>
                    <div className="custom__select__icon">{selectHeader ? <MdKeyboardArrowUp/> :
                        <MdKeyboardArrowDown/>}</div>
                </div>
                <div className="custom__select__dropdown__menu">
                    {selectHeader && langList.map(({code, name}) => {
                        if ((!desktop && selectedLanguage.toUpperCase() !== code.toUpperCase()) || (desktop && selectedLanguage.toUpperCase() !== name.toUpperCase())) {
                            return (
                                <Link
                                    className="custom__select__menu__item" key={code}
                                    onClick={(e) => handleChangeLang(e, code, name)}
                                    to={code === "en" ? `${stripLocale(pathname, locale)}` : `/${code}${stripLocale(pathname, locale)}`}
                                >
                                    {desktop ? name : toFirstLatterUpperCase(code !== "" ? code : "en")}
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default LangSwitcher;
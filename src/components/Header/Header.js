import React, {useCallback, useEffect, useState} from 'react';
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import Logo from "../Logo/logo";
import "./Header.scss";
import callIcon from '../../assets/pictures/header_phone.svg';
import MainButton from "../Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";
import Sidebar from "./SideBar/Sidebar";
import NavBar from "./Navbar/NavBar";
import {mainTelLink} from "../../data/landing-variables";
import CallMenu from "./CallMenu/CallMenu";

const Header = ({locale}) => {
    const {t} = useTranslation();
    const [openMenu,setOpenMenu ] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [headerColor, setHeaderColor] = useState(false);
    const pathname = window.location.pathname || "/";
    const resize = () => (window.innerWidth >= 600) ? setTablet(true) : setTablet(false);
    const openCallMenu = () => setOpenMenu(!openMenu);
    if(!locale) locale = localStorage.getItem("i18nextLng") || "ru";

    const changeBackground = useCallback(() => window.scrollY >= 50
        ? setHeaderColor(true) : setHeaderColor(false), []);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('scroll', changeBackground)
            window.removeEventListener('resize', resize)
        }
    }, [tablet]);

    return (
        <div className={`header__wrapper ${headerColor ? "header__active" : ""}`}>
            <div className="header__container">
                <NavBar locale={locale} dropClassName={"header"}/>
                <Logo locale={locale}/>
                <div className="info__header__wrap">
                    <MainButton
                        classNameButton={"main__page__first__slide second__style orange__text"}
                        btnText={t("buttons.call")}
                        href={mainTelLink}
                    />
                    <MainButton
                        link={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                            locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                        classNameButton={"header__button single__mobile"}
                        btnText={tablet ? t("buttons.reserveTable") : t("buttons.reserveTableHeader")}
                    />
                    <img src={callIcon} alt="call" className="header__mobile__icon" onClick={() => openCallMenu()}/>
                    <LangSwitcher locale={locale} pathname={pathname}/>
                    {/*<LangSwitcher acceptedLang={acceptedLang} locale={locale}/>*/}
                </div>
                <Sidebar pathname={pathname} locale={locale}/>
            </div>
            {openMenu ? <CallMenu  onClose={openCallMenu}/> : null}
        </div>
    );
};

export default Header;
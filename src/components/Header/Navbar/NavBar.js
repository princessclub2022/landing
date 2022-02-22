import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import "./NavBar.scss";
import {Link} from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const NavBar = ({locale, className = '', dropClassName="default", tablet, closeSideBar}) => {
    const {t} = useTranslation();
    const [dropDown, setDropDown] = useState(false);
    const [dropDownTwo, setDropDownTwo] = useState(false);

    const showMenu = () => setDropDown(!dropDown);
    const showMenuTwo = () => setDropDownTwo(!dropDownTwo);
    return (
        <div className={`header__navbar ${className}`}>
            <ul className={`header__navbar__list ${className}`}>
                <li className={`header__menu__li ${className}`}
                    onMouseEnter={tablet ? showMenu : () => {}} onMouseLeave={tablet ? showMenu: () => {}}
                    onClick={showMenu}
                >
                    {`${t("header_nav_bar.0.title")}`}
                    {dropDown ? <MdKeyboardArrowUp className={"drop__up"}/> : <MdKeyboardArrowDown/>}
                    {dropDown ? <DropDownMenu
                        closeSideBar={closeSideBar}
                        drop={(t("header_nav_bar.0.dropDownMenu", {returnObjects: true}))}
                        className={`${dropClassName}_first`}
                        locale={locale}
                    /> : null}
                </li>
                <li className={`header__menu__li ${className}`}
                    onMouseEnter={tablet ? showMenuTwo : () => {}} onMouseLeave={tablet ? showMenuTwo: () => {}}
                    onClick={() => showMenuTwo()}
                >
                    {`${t("header_nav_bar.1.title")}`}
                    {dropDownTwo ? <MdKeyboardArrowUp className={"drop__up"}/> : <MdKeyboardArrowDown/>}
                    {dropDownTwo ? <DropDownMenu
                        closeSideBar={closeSideBar}
                        className={`${dropClassName}_second`}
                        drop={(t("header_nav_bar.1.dropDownMenu", {returnObjects: true}))}
                        locale={locale}
                    /> : null}
                </li>
                <li className={`header__menu__li ${className}`}>
                    <Link to={`${locale !== "ru" ? `/${locale}` : ""}/karaoke/`}
                          className={`navBar__item ${className}`}    onClick={closeSideBar}>
                        {`${t("header_nav_bar.2.title")}`}
                    </Link>
                </li>
                <li className={`header__menu__li ${className}`}>
                    <Link to={locale === "ru" ? t("header_nav_bar.3.link.ru") : locale === "ua" ? t("header_nav_bar.3.link.ua") : t("header_nav_bar.3.link.en")}
                          className={`navBar__item ${className}`} onClick={closeSideBar}>
                        {`${t("header_nav_bar.3.title")}`}
                    </Link>
                </li>
                <li className={`header__menu__li ${className}`}>
                    <Link to={locale === "ru" ? t("header_nav_bar.4.link.ru") : locale === "ua" ? t("header_nav_bar.4.link.ua") : t("header_nav_bar.4.link.en")}
                          className={`navBar__item ${className}`}  onClick={closeSideBar}>
                        {`${t("header_nav_bar.4.title")}`}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
import React from 'react';
import "./CallMenu.scss";
import Logo from "../../Logo/logo";
import location from "../../../assets/pictures/Location.svg"
import phone from "../../../assets/pictures/Phone.svg"
import {useTranslation} from "react-i18next";
import {mainTelLink, mainTelLinkText, mainTelLinkTwo, mainTelLinkTwoText} from "../../../data/landing-variables";
import Separator from "../../Separator";
import {VscClose} from "react-icons/vsc";
import MainButton from "../../Buttons/MainButton/MainButton";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

const CallMenu = ({onClose}) => {
    const {t} = useTranslation();
    return (
        <div className={"header__call__menu__wrapper"}>
            <div className="header__call__close__menu">
                <VscClose onClick={onClose} className={"header__call__close__icon"}/>
            </div>
            <Logo className={"header__call__close__menu"}/>
            <div className="header__call__info">
                <div className="call__block">
                    <img src={location} alt="location-map" className="call__block__location__pic"/>
                    <p className="call__block__location">{t("header.city")}</p>
                    <p className="call__block__location__address">{t("header.club1")}</p>
                    <img src={phone} alt="phone_number" className="call__block__phone__pic"/>
                    <a href={mainTelLink} className="call__block__phone__number">{mainTelLinkText}</a>
                </div>
                <Separator className={"comming_soon"}/>
                <div className="call__block">
                    <img src={location} alt="location-map" className="call__block__location__pic"/>
                    <p className="call__block__location">{t("header.city")}</p>
                    <p className="call__block__location__address">{t("header.club2")}</p>
                    <img src={phone} alt="phone_number" className="call__block__phone__pic"/>
                    <a href={mainTelLinkTwo} className="call__block__phone__number">{mainTelLinkTwoText}</a>
                </div>
            </div>
            <MainButton
                classNameButton={"header__call"}
                btnText={t("buttons.reserveTable")}
                link={"/form/"}
            />
            <LangSwitcher className={"header__call"} />
        </div>
    );
};

export default CallMenu;
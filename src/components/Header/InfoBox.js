import React from 'react';
import {IoPhonePortraitOutline} from "react-icons/io5";
import {mainTel, mainTelLink} from "../../data/landing-variables";
import MainButton from "../Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";
import location from "../../assets/pictures/Location.svg";

const InfoBox = ({className=""}) => {
    const {t} = useTranslation();
    return (
        <div className={`header__info__box ${className}`}>
            <div className={`top__info ${className}`}>
                <div className={`top__info__location ${className}`}>
                    <img src={location} alt="location" className="map__address__pic"/>
                    <p className={`top__info__location__name ${className}`}>{t("header.city")}</p>
                </div>
                <div className={`top__info__address ${className}`}>
                    <div className={`header__address ${className}`}>{t("header.club1")}</div>
                    <div className={`header__address ${className}`}>{t("header.club2")}</div>
                </div>
            </div>
            <div className={`bottom__info ${className}`}>
                {/*<div className={`header__phone ${className}`}>*/}
                {/*    <IoPhonePortraitOutline/>*/}
                {/*    <a href={mainTelLink} className={`top__info__phone__link ${className}`}>{mainTel}</a>*/}
                {/*</div>*/}
                <MainButton classNameButton={"header__button"} btnText={t("buttons.reserveTable")}/>
            </div>
        </div>
    );
};

export default InfoBox;
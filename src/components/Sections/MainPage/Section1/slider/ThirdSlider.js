import React from 'react';
import {useTranslation} from "react-i18next";
import MainButton from "../../../../Buttons/MainButton/MainButton";
import {mainTelLink} from "../../../../../data/landing-variables";

const ThirdSlider = ({subtitle, locale}) => {
    const {t} = useTranslation();
    if(!locale) locale = localStorage.getItem("i18nextLng") || "ru"
    return (
        <div className={"first__slide__wrap third__slider"}>
            <div className={"first__slide__container"}>
                <h1 className="first__slide__title">{t("mainPage.slider.title")}<span>тм</span></h1>
                <div className="first__slide__description">{t("mainPage.slider.thirdDescription")}</div>
                <div className="first__slide__btns__container">
                    <MainButton
                        classNameButton={"main__page__first__slide"}
                        btnText={t("buttons.reserveTable")}
                        link={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                            locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                    />
                    <MainButton
                        classNameButton={"main__page__first__slide second__style"}
                        btnText={t("buttons.call")}
                        href={mainTelLink}
                    />
                </div>
                {subtitle ?  <div className="first__slide__subtitle">{t("mainPage.slider.thirdSubtitle")}</div> : null}
            </div>
        </div>
    );
};

export default ThirdSlider;
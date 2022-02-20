import React from 'react';
import CardOption from "./CardOption";
import {useTranslation} from "react-i18next";

const Section2 = () => {
    const {t} = useTranslation();
    // if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";
    return (
        <div className={"member__card__options__wrapper"}>
            {t("memberClubPageOptions", {returnObjects: true}).map((el, index) => {
                return (
                    <CardOption key={index} el={el}/>
                )
            })}

        </div>
    );
};

export default Section2;
import React from 'react';
import "./FeedBack.scss";
import {useTranslation} from "react-i18next";
import {FaCheck, FaTimes} from "react-icons/fa";

const FeedBackBlock = ({setActive, setPositive}) => {
    const {t} = useTranslation();

    const handlePositiveClick = () => {
        setActive(true);
        setPositive(true)
    }
    const handleNegativeClick = () => {
        setActive(true);
        setPositive(false)
    }

    return (
        <div className={"feedback__block__wrap"}>
            <div className={"feedback__block__container"}>
                <p className="feedback__block__title">{t("feedback.title")}</p>
                <div className={"feedback__block__answers"}>
                    {/*<div className={"feedback__block__answers"} onClick={(e) => setActive(true)}>*/}
                    <div className="feedback__answer " onClick={() => handleNegativeClick()}>
                        <span className="feedback__answer__pic negative"><FaTimes/></span>
                        <p className="feedback__answer__text">{t("feedback.no")}</p>
                    </div>
                    <div className="feedback__answer " onClick={() => handlePositiveClick()}>
                        <span className="feedback__answer__pic positive"><FaCheck/></span>
                        <p className="feedback__answer__text">{t("feedback.yes")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBackBlock;
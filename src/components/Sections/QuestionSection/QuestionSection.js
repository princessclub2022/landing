import React from 'react';
import "./QuestionSection.scss"
import MainButton from "../../Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";

const QuestionSection = ({title, link, onClick, classNameButton = '', btnText, href, className= ''}) => {
    const {t} = useTranslation();
    return (
        <div className={`question__section__wrapper ${className}`}>
            <div className={`question__section__container ${className}`}>
                <h4 className={`question__section__title ${className}`} >{title}</h4>
                <MainButton
                    link={link}
                    onClick={onClick}
                    classNameButton={classNameButton}
                    btnText={btnText ? btnText : t("mainButton")}
                    href={href}
                />
            </div>
        </div>
    );
};

export default QuestionSection;
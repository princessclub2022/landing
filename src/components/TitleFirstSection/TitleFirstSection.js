import React from 'react';
import "./TitleFirstSection.scss";
import MainButton from "../Buttons/MainButton/MainButton";

const TitleFirstSection = ({title, coloredTitle, description, btnText, className = '', link}) => {
    return (
        <div className={`title__common__first__wrapper ${className}`}>
            <div className={`title__common__first__container ${className}`}>
                <h1 className={`title__common__first__title ${className}`}>
                    {title}
                    <span>{coloredTitle}</span>
                </h1>
                <div className={`title__common__first__description ${className}`}>{description}</div>
                <MainButton link={link} btnText={btnText} classNameButton={className}/>
            </div>
        </div>
    );
};

export default TitleFirstSection;
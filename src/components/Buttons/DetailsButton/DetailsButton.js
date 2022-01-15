import React from 'react';
import "./DetailsButton.scss";
import arrow from "../../../assets/pictures/article-block-arrow-details.svg"
import {Link} from "react-router-dom";

const DetailsButton = ({text, className = '', pic, link}) => {
    return (
        <div className={`details__link__wrapper ${className}`}>
            <Link className={`details__link ${className}`} to={link} onClick={(e) => e.stopPropagation()}>
                {text}
                <img src={pic ? pic : arrow} alt={"arrow"} className="details__link__pic"/>
            </Link>
        </div>
    );
};

export default DetailsButton;
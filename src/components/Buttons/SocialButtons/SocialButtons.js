import React from 'react';
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"
import {facebook_link, instagram_link, telegram_link} from "../../../env";
import {BsInstagram} from "react-icons/bs";
import "./Social.scss"





const SocialButtons = ({className = ''}) => {
    return (
        <div className={`social__buttons__wrapper ${className}`}>
            <a href={instagram_link} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <BsInstagram />
            </a>
            <a href={facebook_link} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <FaFacebookF/>
            </a>
            <a href={telegram_link} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <FaTelegramPlane/>
            </a>
        </div>
    );
};

export default SocialButtons;
import React from 'react';
import {VscTwitter} from "react-icons/vsc"
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa"
import {facebook, telegram, twitter} from "../../../env";

const SocialButtons = ({className = '', twitterLink, telegramLink, facebookLink}) => {
    return (
        <div className={`social__buttons__wrapper ${className}`}>
            <a href={twitterLink ? twitterLink : twitter} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <VscTwitter/>
            </a>
            <a href={facebookLink ? facebookLink : facebook} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <FaFacebookF/>
            </a>
            <a href={telegramLink ? telegramLink : telegram} className={`social__item ${className}`} target="_blank"
               rel="noreferrer">
                <FaTelegramPlane/>
            </a>
        </div>
    );
};

export default SocialButtons;
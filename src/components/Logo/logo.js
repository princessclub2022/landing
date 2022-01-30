import React from 'react';
import {Link} from "react-router-dom";
import LogoType from "../../assets/pictures/Logo.webp";


const Logo = ({className = '', locale}) => {
    return (
            <Link to={`${locale !== "ru" ? `/${locale}/` : `/`}`}
                  className={`logo__wrapper ${className ? className : ''}`}>
                <img src={LogoType} alt="princessmenclub-logo"
                     className={`logo__picture ${className ? className : ''}`}/>
            </Link>
    );
};
export default Logo;
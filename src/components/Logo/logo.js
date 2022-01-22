import React from 'react';
import {Link} from "react-router-dom";
import LogoType from "../../assets/pictures/Logo.webp";
// import LogoType from "../../assets/pictures/image.png";


const Logo = ({className = '', locale}) => {
    return (
            <Link to={`${(locale !== undefined && locale !== "en" && locale !== null) ? `/${locale}/` : `/`}`}
                  className={`logo__wrapper ${className ? className : ''}`}>
                <img src={LogoType} alt="princessmenclub-logo"
                     className={`logo__picture ${className ? className : ''}`}/>
            </Link>
    );
};
export default Logo;
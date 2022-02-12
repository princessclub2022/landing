import React from 'react';
import {Link} from "react-router-dom";
import LogoTypeSideBar from "../../assets/pictures/image.svg";
// import LogoTypeSideBar from "../../assets/pictures/Sidebar_logo.webp";


const Logo = ({className = '', locale}) => {
    return (
            <Link to={`${locale !== "ru" ? `/${locale}/` : `/`}`}
                  className={`logo__wrapper ${className ? className : ''}`}>
                <img src={LogoTypeSideBar} alt="princessmenclub-logo"
                     className={`logo__picture ${className ? className : ''}`}/>
            </Link>
    );
};
export default Logo;
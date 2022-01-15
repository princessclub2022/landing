import React from 'react';
import {Link} from "react-router-dom";
import LogoType from "../../assets/pictures/kyrrex-logo-black (1).svg";

const Logo = ({className = '', locale}) => {
    return (
            <Link to={`${(locale !== undefined && locale !== "en" && locale !== null) ? `/${locale}/` : `/`}`}
                  className={`logo__wrapper ${className ? className : ''}`}>
                <img src={LogoType} alt="kyrrex-support-logo"
                     className={`logo__picture ${className ? className : ''}`}/>
            </Link>
    );
};
export default Logo;
import React from 'react';
import {Link} from "react-router-dom";

const DropDownMenu = ({drop, locale, className=''}) => {
    return (
        <div className={`dropDownMenu__wrapper ${className}`}>
            {drop.length > 0 ? drop.map((item, index) => {
                return (
                    <div className={`dropMenu__item ${className}`} key={index}>
                        <>
                            {item.link ?
                                <Link to={locale === "ru" ? item.link.ru : locale === "ua" ? item.link.ua : item.link.en}
                                      className={`drop_element ${className}`}>
                                    {item.title}
                                </Link> : null}
                            {item.url ?
                                <a href={item.url}
                                   target="_blank" rel="noreferrer"
                                   className={`drop_element ${className}`}>
                                    {item.title}
                                </a>
                                : null}
                            {item.nav ? <p className={`drop_element ${className}`}>
                                {item.title}
                            </p> : null}
                        </>
                    </div>)
            }) : null}
        </div>
    );
};

export default DropDownMenu;
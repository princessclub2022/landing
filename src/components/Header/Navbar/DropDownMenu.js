import React from 'react';
import {Link} from "react-router-dom";

const DropDownMenu = ({drop, locale, className='', closeSideBar }) => {
    return (
        <div className={`dropDownMenu__wrapper ${className}`}>
            {drop.length > 0 ? drop.map((item, index) => {
                return (
                    <div className={`dropMenu__item ${className}`} key={index}>
                        <>
                            {item.link ?
                                <Link to={locale === "ru" ? item.link.ru : locale === "ua" ? item.link.ua : item.link.en}
                                       className={`drop_element ${className}`} onClick={closeSideBar}>
                                     {item.title}
                                 </Link> : null}
                            {item.url ?
                                <a href={item.url}
                                   target="_blank" rel="noreferrer"
                                   className={`drop_element ${className}`}>
                                    {item.title}
                                    onClick={() => closeSideBar()}
                                </a>
                                : null}
                            {item.nav ? <p className={`drop_element ${className}`}  onClick={() => closeSideBar()}>
                                {item.title}
                            </p> : null}
                        </>
                    </div>)
            }) : null}
        </div>
    );
};

export default DropDownMenu;
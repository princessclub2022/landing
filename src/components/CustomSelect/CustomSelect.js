import React from 'react';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

const CustomSelect = ({
                          setIsClickedDropDown,
                          isClickedDropDown,
                          list,
                          className = '',
                          onClick,
                          text_header,
                          routerLink,
                          handleChange
                      }) => {
    return (
        <div className={`default__custom__select ${className} ${setIsClickedDropDown ? "is-active" : ''}`}>
            <div className={`custom__select__header ${className}`} onClick={onClick}>
                <span className="custom__select__header__text">{text_header}</span>
                <div className={`custom__select__icon ${className}`}>{isClickedDropDown ? <MdKeyboardArrowUp/> :
                    <MdKeyboardArrowDown/>}</div>
            </div>
            <div className="custom__select__dropdown__item__menu">
                {isClickedDropDown && list.map((el, index) => {
                    // if (routerLink) {
                    //     return (
                    //         <Link
                    //             className={`custom__select__menu__item ${className}`} key={el.id}
                    //             onClick={handleChange ? handleChange : null}
                    //             // to={el.links ? el.links : "/"}
                    //             to={"/"}
                    //         >
                    //             {el.header}
                    //         </Link>
                    //     )
                    // } else {
                        return (
                            <div className="custom__select__menu__item__wrapper" key={index}>
                                {`${index + 1}.`}
                                <a
                                    className={`custom__links ${className}`}
                                    onClick={handleChange ? handleChange : null}
                                    href={el.header ? `#${el.header.toLowerCase()}`.trim() : "#"}
                                >
                                    {el.header}
                                </a>
                            </div>
                        )
                    // }
                })}
            </div>
        </div>
    );
};

export default CustomSelect;
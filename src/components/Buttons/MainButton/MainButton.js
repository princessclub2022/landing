import React from 'react';
import {Link} from "react-router-dom";
import "./MainButton.scss";

const MainButton = ({href, classNameButton = '', btnText, link, onClick = null}) => {

    const onHandleMouseDown = (event) => {
        event.target.style.color = "#9AC8BA";
        event.target.style.background = "linear-gradient(90deg, #057860 0%, #026924 100%)";
    }
    const onHandleMouseUp = (event) => {
        event.target.style.color = "#FFFFFF";
        event.target.style.background = "linear-gradient(90deg, #00A482 0%, #009B33 100%)";
    }

    return (
        <div className={`main__button__wrapper ${classNameButton ? classNameButton : ''} `}
             onMouseDown={(event) => onHandleMouseDown(event)}
             onMouseLeave={(event) => onHandleMouseUp(event)}
        >
            <button className="main__button" onClick={onClick}>
                {href ? <a className={`btn__text ${classNameButton}`} href={href} target="_blank"
                           rel="noreferrer">{btnText}</a>
                    : null}
                {link ? <Link to={{pathname: `${link}`}} className={`btn__text ${classNameButton}`}>
                    {btnText}
                </Link> : null}
                {(!href && !link) ? <p className={`btn__text ${classNameButton}`}>{btnText}</p> : null}
            </button>
        </div>
    );
};

export default MainButton;
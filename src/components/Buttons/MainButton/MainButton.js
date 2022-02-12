import React from 'react';
import {Link} from "react-router-dom";
import "./MainButton.scss";


const MainButton = ({href, classNameButton = '', btnText, link, onClick = null, picture, type = null}) => {

    const onHandleMouseDown = (event) => {
        event.target.style.color = "#FFFFFF";
        event.target.style.background = "#C76B00";
        event.target.style.boxShadow = "rgba(214, 98, 48, 0.38)";
    }
    const onHandleMouseUp = (event) => {
        const classNameTarget = event.target.className;
        if (classNameTarget.includes("second__style")) {
            event.target.style.color = "#FFFFFF";
            event.target.style.background = "transparent";
        } else {
            event.target.style.color = "#FFFFFF";
            event.target.style.background = "#E89C17";
        }
        if(classNameTarget.includes("orange__text")) {
            event.target.style.color = "#E89C17";
        }
    }
    const onHandleMouseOver = (event) => {
        event.target.style.boxShadow = "0px 9px 28px rgba(214, 98, 48, 0.38)";
    }
    const onHandleMouseOut = (event) => {
        event.target.style.boxShadow = "unset";
    }


    return (
        <div className={`main__button__wrapper ${classNameButton ? classNameButton : ''} `}>
            <button className="main__button" onClick={onClick}
                    type={type}
                    onMouseDown={(event) => onHandleMouseDown(event)}
                    onMouseLeave={(event) => onHandleMouseUp(event)}
                    onMouseOver={(event) => onHandleMouseOver(event)}
                    onMouseOut={(event) => onHandleMouseOut(event)}
            >
                {href ? <a className={`btn__text ${classNameButton}`} href={href} target="_blank" rel="noreferrer">
                        {picture ?
                            <img src={picture} alt={"alarm"} className="main__button__img"/> : null}
                        {btnText}
                    </a>
                    : null}
                {link ? <Link to={{pathname: `${link}`}} className={`btn__text ${classNameButton}`}>
                    {picture ?
                        <img src={picture} alt={"alarm"} className="main__button__img"/> : null}
                    {btnText}
                </Link> : null}
                {(!href && !link) ? <span className={`btn__text ${classNameButton}`}>
                    {picture ?
                        <img src={picture} alt={"alarm"} className="main__button__img"/> : null}
                    {btnText}
                </span> : null}
            </button>
        </div>
    );
};

export default MainButton;
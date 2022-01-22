import React from 'react';
import {Link} from "react-router-dom";
import "./MainButton.scss";


const MainButton = ({href, classNameButton = '', btnText, link, onClick = null, picture}) => {

    const onHandleMouseDown = (event) => {
        event.target.style.color = "#FFFFFF";
        event.target.style.background = "#C76B00";
        event.target.style.boxShadow = "rgba(214, 98, 48, 0.38)";
        // event.target.style.background = "linear-gradient(90deg, #057860 0%, #026924 100%)";
    }
    const onHandleMouseUp = (event) => {
        event.target.style.color = "#FFFFFF";
        event.target.style.background = "#E89C17";
        // event.target.style.background = "linear-gradient(90deg, #00A482 0%, #009B33 100%)";
    }

    return (
        <div className={`main__button__wrapper ${classNameButton ? classNameButton : ''} `}>
            <button className="main__button" onClick={onClick}
                    onMouseDown={(event) => onHandleMouseDown(event)}
                    onMouseLeave={(event) => onHandleMouseUp(event)}>
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
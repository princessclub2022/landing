import React from 'react';
import MainButton from "../../../Buttons/MainButton/MainButton";
import parse from 'html-react-parser';

const CardOption = ({el}) => {
    return (
        <>
            <div className={"member__card__options__wrapper"}>
                <p className="member__card__options__title">{el.title}</p>
                <p className="member__card__options__subtitle">{el.subtitle}</p>
                <p className="member__card__options__amount">{el.subtitle}</p>
                <div className="member__card__options__amount">
                    {el.from}
                    <span>{el.amount}</span>
                    {el.currency}
                </div>
                <div className="member__card__options__list">{parse(el.description)}</div>
                <MainButton classNameButton={"member__card__options"} btnText={el.btn_text} link={`/`}/>
            </div>
            <div className="member__card__options__post__text">
                <p className="card__options__post__text">{el.postText}</p>
                {el.postText2 ? <p className="card__options__post__text">{el.postText2}</p> : null}
            </div>
        </>
    );
};

export default CardOption;
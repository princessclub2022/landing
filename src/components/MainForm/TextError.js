import React from 'react';
import {IoIosCloseCircleOutline} from "react-icons/io";

const TextError = (props) => {
    const {picture} = props;
    return <div className={`main__form__error`}>
        {picture ? <IoIosCloseCircleOutline/> : null}
        {props.children}
    </div>
};

export default TextError;
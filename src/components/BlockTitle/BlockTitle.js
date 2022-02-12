import React from 'react';
import "./BlockTitle.scss";

const BlockTitle = ({title, className=''}) => {
    return (
        <>
            <h3 className={`about__club__title ${className}`}>{title}</h3>
            <div className={`about__club__devider ${className}`}/>
        </>
    );
};

export default BlockTitle;
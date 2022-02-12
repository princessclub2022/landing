import React, {useEffect, useState} from 'react';
import "./Section3.scss";
import BlockTitle from "../../../BlockTitle/BlockTitle";
import {useTranslation} from "react-i18next";
import Section3Slider from "./Section3Slider/Section3Slider";
import {allAllow} from "../../../../data/pictures";


const Section3 = () => {
    const {t} = useTranslation();
    const [tablet, setTablet] = useState(false);
    const resize = () => (window.innerWidth >= 600) ? setTablet(true) : setTablet(false);

    useEffect(() => {
        resize()
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize)
    }, [tablet]);
    return (
        <div className={"all__allow__wrapper"}>
            <div className={"all__allow__container"}>
                <div className="all__allow__title__wrap">
                    <BlockTitle title={t("mainPage.allAllowBlock.title")} className={"all__allow"}/>
                </div>
                {tablet ?
                    <div className={"all__allow__info"}>
                        {t(`allAllowBlock_list`, {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="allAllowBlock__list__item" key={index}>
                                    <img src={allAllow[index].pic} alt="clubs__options"
                                         className="allAllowBlock__list__item__pic"/>
                                    <img src={allAllow[index].picHover} alt="clubs__options"
                                         className="allAllowBlock__list__item__pic hover__pic"/>
                                    <p className="allAllowBlock__list__item__title">{item.title}</p>
                                </div>
                            )
                        })}
                    </div>
                    : <Section3Slider allAllow={allAllow}/>}
            </div>
        </div>
    );
};

export default Section3;
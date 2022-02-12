import React from 'react';
import "./ReviewSection.scss";
import {useTranslation} from "react-i18next";
import {reviewsAll} from "../../../data/pictures";

const ReviewSection = () => {
    const {t} = useTranslation();
    return (
        <div className={"review__main__page__wrapper"}>
            <div className={"review__main__page__container"}>
                <h3 className={"review__main__title"}>{t("mainPage.reviews.title")}</h3>
                <div className="review__main__box">
                    {reviewsAll.map((el,index) => {
                        return (
                            <a href={el.link} className="review__item__box" target="_blank" rel="noreferrer" key={index}>
                                <img src={el.image} alt="site-name" className="review__item__pic"/>
                                <img src={el.stars} alt="rate" className="review__item__pic"/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
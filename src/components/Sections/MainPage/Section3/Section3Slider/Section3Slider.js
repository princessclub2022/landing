import React from 'react';
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
import "../Section3.scss"
import image1 from "../../../../../assets/pictures/MainPage/Можно Все/1.svg"
import image2 from "../../../../../assets/pictures/MainPage/Можно Все/2.svg"
import image3 from "../../../../../assets/pictures/MainPage/Можно Все/3.svg"
import image4 from "../../../../../assets/pictures/MainPage/Можно Все/4.svg"
import image5 from "../../../../../assets/pictures/MainPage/Можно Все/5.svg"
import image6 from "../../../../../assets/pictures/MainPage/Можно Все/6.svg"
import image7 from "../../../../../assets/pictures/MainPage/Можно Все/7.svg"
import image8 from "../../../../../assets/pictures/MainPage/Можно Все/8.svg"
import {allAllow, allAllowAll} from "../../../../../data/pictures";

const pictures = [image1, image2,image3,image4,image5,image6,image7,image8]

const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 2220,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            // breakpoint: 1279,  // like this will be from 0 to 480
            breakpoint: 783,  // like this will be from 0 to 480
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
}

const Section3Slider = ({allAllow}) => {
    const {t} = useTranslation();
    return (
        <div className={"all__allow__slider__wrapper"}>
            <Slider {...settings} className={"all__allow"}>
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
            </Slider>
        </div>
    );
};

export default Section3Slider;
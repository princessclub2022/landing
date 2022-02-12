import React  from 'react';
import FirstSlide from "./slider/FirstSlide";
import "./Section1.scss";
import SecondSlider from "./slider/SecondSlider";
import ThirdSlider from "./slider/ThirdSlider";
import Slider from "react-slick";


const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    initialSlide: 0,
    autoplay: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in",
    // adaptiveHeight: true,
    customPaging: i => (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>),
    responsive: [
        {
            breakpoint: 2220,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 783,  // like this will be from 0 to 480
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                adaptiveHeight: true,
            }
        }
    ],
}


const Section1 = ({locale}) => {
    if(!locale) locale = localStorage.getItem("i18nextLng") || "ru"
    return (
        <div className={"main__pape__section1__wrap"}>
            <div className={"main__pape__section1__container"}>
                <Slider {...settings} className={"main__page"}>
                    <FirstSlide locale={locale}/>
                    <SecondSlider locale={locale}/>
                    <ThirdSlider subtitle locale={locale}/>
                </Slider>
            </div>
        </div>
    );
};

export default Section1;
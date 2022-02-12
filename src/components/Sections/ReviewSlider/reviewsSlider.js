import React, {useEffect, useState} from 'react';
import "./reviewsSlider.scss";
import {useTranslation} from "react-i18next";
import photo from "../../../assets/pictures/MainPage/review/Avatar.svg";
import rate from "../../../assets/pictures/MainPage/review/Rating-full.svg";
import Slider from "react-slick";
import prev from "../../../assets/sliderArrowLeft.svg"
import next from "../../../assets/sliderArrowRight.svg"
import {getInfoFromCms} from "../../../api_requests";
import Loader from "../../Loader/Loader";
import {useErrorHandler} from "react-error-boundary";



const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <img
            src={next}
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
            alt={"next-arrow"}/>
    );
}

const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <img
            src={prev}
            className={className}
            style={{...style, display: "block",}}
            onClick={onClick}
            alt={"prev-arrow"}/>
    );
}


const settings = {
    infinite: true,
    speed: 500,
    // arrows: true,
    dots: true,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in",
    adaptiveHeight: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    // adaptiveHeight: true,

    responsive: [
        {
            breakpoint: 2220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 960,  // like this will be from 0 to 480
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                adaptiveHeight: true,
            }
        }
    ],
}


const ReviewsSlider = () => {
    const {t} = useTranslation();
    const [allComments, setAllComments] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleError = useErrorHandler();
    useEffect(() => {
        getInfoFromCms(`/comments?_sort=published_at:desc`, setAllComments, setError, setLoading)
    }, [])

    if (loading) return <Loader/>
    if (error) handleError(error)
    const lastFiveComments = allComments.length > 0 ? allComments.slice(0, 5) : allComments;

    return (
        <div className={"reviews__slider__wrap"}>
            <Slider {...settings} className={"reviews__slider comments"}>
                {lastFiveComments.length > 0 ? lastFiveComments.map((el, index) => {
                        return (
                            <div className="comment__item__wrapper" key={el.id}>
                                <div className="comment__avatar__block">
                                    <img src={photo} alt="name" className="person__comment__pic"/>
                                    <p className="person__comment__name">{(el.name !== "" && el.name !== null) ? el.name : t(`comments.${index}.name`)}</p>
                                    <p className="person__comment__date">{(el.date !== "" && el.date !== null) ? el.date : t(`comments.${index}.date`)}</p>
                                </div>
                                <div className="comment__person__info">
                                    <div
                                        className="person__comment__comment">{(el.comment !== "" && el.comment !== null) ? el.comment : t(`comments.${index}.comment`)}</div>
                                    <img src={el.starts.url || rate} alt={"star-rate"} className="person__comment__rate"/>
                                </div>
                            </div>
                        )
                    }) :
                    t("comments", {returnObjects: true}).map((el, index) => {
                        return (
                            <div className="comment__item__wrapper" key={index}>
                                <div className="comment__avatar__block">
                                    <img src={photo} alt="name" className="person__comment__pic"/>
                                    <p className="person__comment__name">{el.name}</p>
                                    <p className="person__comment__date">{el.date}</p>
                                </div>
                                <div className="comment__person__info">
                                    <div className="person__comment__comment">{el.comment}</div>
                                    <img src={el.rate || rate} alt={"star-rate"} className="person__comment__rate"/>
                                </div>
                            </div>
                        )
                    })}
            </Slider>
        </div>
    );
};

export default ReviewsSlider;
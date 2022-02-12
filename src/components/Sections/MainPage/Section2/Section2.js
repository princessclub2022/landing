import React from 'react';
import "./Section2.scss";
import {useTranslation} from "react-i18next";
import image1 from "../../../../assets/pictures/MainPage/About Club/1.png"
import image2 from "../../../../assets/pictures/MainPage/About Club/2.png"
import image3 from "../../../../assets/pictures/MainPage/About Club/3.png"
import image4 from "../../../../assets/pictures/MainPage/About Club/4.png"
import videoPoster from "../../../../assets/pictures/MainPage/cover_video.webp"
import AboutClubVideoLink from "../../../../assets/princess-small.mp4";
import MainButton from "../../../Buttons/MainButton/MainButton";
import BlockTitle from "../../../BlockTitle/BlockTitle";
// import {AboutClubYouTubeVideoLink} from "../../../../data/landing-variables";


const pictures = [image1, image2, image3, image4]


const Section2 = () => {
    const {t} = useTranslation();
    return (
        <div className={"about__club__wrapper"}>
           <BlockTitle title={t("mainPage.aboutClub.title")}/>
            <div className="about__club__info">
                <div className="about__club__options">
                    {t("aboutClub_description", {returnObjects: true}).map((el, index) => {
                        return (
                            <div className="about__club__options__item" key={index}>
                                <img className={"about__club__picture"} src={pictures[index]} alt="club-option"/>
                                <div className="about__club__options__item__description">{el.title}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="about__club__video__wrapper">
                    <video className={"about__club__video"} controls poster={videoPoster}>
                        <source src={AboutClubVideoLink} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <MainButton
            link={"/about-club/"}
            btnText={t("buttons.details")}
            classNameButton={"about__club"}
            />
        </div>
    );
};

export default Section2;
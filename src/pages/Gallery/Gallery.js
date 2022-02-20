import React, {useState} from 'react';
import "./Gallery.scss"
import {useTranslation} from "react-i18next";
import Photo from "./Photo";
import {girlsArrayPic, girlsArrayPic2, interiorArrayPic, kitchenArrayPic, kitchenArrayPic2} from "../../data/pictures";
import SimpleReservedTableBlock from "../../assets/pictures/MainPage/SimpleReservedTableBlock/SimpleReservedTableBlock";
import MapAddressSection from "../../components/Sections/MapAddressSection/MapAddressSection";
// import {SRLWrapper} from "simple-react-lightbox";

const Gallery = () => {
    const {t} = useTranslation();
    const [currentTab, setCurrentTab] = useState(0)
    const toggleTab = (index) => setCurrentTab(index);
    const allPictures = [...girlsArrayPic, ...interiorArrayPic];

    return (
        <div className={"gallery__wrapper"}>
            <h1 className={"gallery__main__title"}>{t("gallery.title")}</h1>
            <div className="gallery__tabs">
                {t("gallery__tabs", {returnObjects: true}).map((el, index) => <div
                        className={`gallery__tabs__item ${currentTab === index ? "active" : ""}`}
                        key={index}
                        onClick={() => toggleTab(index)}>
                        {el.tab}
                    </div>
                )}
            </div>
            <div className="gallery__inner__container">
                {currentTab === 3 ? <Photo gallery staticPhoto={allPictures}/> : null}
                {currentTab === 0 ? <Photo
                    allStaticPhoto={girlsArrayPic2}
                    staticPhoto={girlsArrayPic}
                    path={`girls`}
                    girls
                /> : null}
                {currentTab === 1 ? <Photo
                    staticPhoto={interiorArrayPic}
                    path={`interior`}
                    interior
                /> : null}
                {currentTab === 2 ?
                    <Photo
                        allStaticPhoto={kitchenArrayPic2}
                        staticPhoto={kitchenArrayPic}
                        path={`gallery`}
                        kitchen
                    /> : null}
            </div>
            <SimpleReservedTableBlock/>
            <MapAddressSection />
        </div>
    );
};

export default Gallery;
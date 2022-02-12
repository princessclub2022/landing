import React from 'react';
import {useTranslation} from "react-i18next";
import "./MapAddress.scss"
import location from "../../../assets/pictures/Location.svg"
import phone from "../../../assets/pictures/yellowPhone.svg"
import Footer from "../../Footer/Footer";
import GoogleFromMap from "./GoogleFromMap";
import {useJsApiLoader} from "@react-google-maps/api";
import {GOOGLE_API_KEY} from "../../../env";

const libraries = ["places"];

const MapAddressSection = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY,
        libraries
    })

    // const defaultCenter = {
    //     lat: 50.4513,
    //     lng:  30.5252274242255
    // };
    const defaultCenter = {
        lat: 50.45152768577761,
        lng: 30.525179540439407
    };
    const clubsLocations = [
        {
            location: {
                lat: 50.45152768577761,
                lng: 30.525179540439407
            }
        },
        {
            location: {
                lat: 50.421567332009936,
                lng: 30.54469772710893
            }
        }
    ]


    return (
        <div className={"map__address__main__wrapper"}>
            <div className={"map__address__main__container"}>
                {t("googleMaps", {returnObjects: true}).map((el, index) => {
                    return (
                        <div className="map__address__item__container" key={index}>
                            <div className="map__address__item__info">
                                <div className="map__address__header__wrapper">
                                    <p className="map__address__item__title">{el.title}</p>
                                    <a href={el.link} className="map__address__item__address__link">{el.addressName}</a>
                                </div>
                                <div className="map__address__contact">
                                    <div className="map__address__contact__box">
                                        <img src={location} alt="location" className="map__address__pic"/>
                                        <p className="map__address__item__address">{el.address}</p>
                                    </div>
                                    <div className="map__address__contact__box">
                                        <img src={phone} alt="phone" className="map__phone__pic"/>
                                        <a href={el.phoneLink} className="map__address__item__phone">{el.phone}</a>
                                    </div>
                                </div>
                                <p className="map__address__item__work">{el.subtitleWorkTime}</p>
                                <p className="map__address__item__work__time">{el.workTime}</p>
                            </div>
                            <div className="map__address__item__map">
                                {isLoaded ? <GoogleFromMap defaultCenter={clubsLocations[index].location}/> : <div>Заглушка</div>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer locale={locale}/>
        </div>
    );
};

export default MapAddressSection;
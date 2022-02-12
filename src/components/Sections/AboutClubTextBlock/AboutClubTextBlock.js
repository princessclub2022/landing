import React, {useEffect, useState} from 'react';
import "../../../App.scss";
import {useErrorHandler} from "react-error-boundary";
import {getInfoFromCms} from "../../../api_requests";
import Loader from "../../Loader/Loader";
import parse from 'html-react-parser';

const AboutClubTextBlock = ({title, text, path, locale}) => {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleError = useErrorHandler();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";

    useEffect(() => {
        getInfoFromCms(`${path}?_locale=${locale === "ua" ? "uk-UA" : locale}`, setInfo, setError, setLoading)
    }, [locale])

    if (loading) return <Loader/>
    if (error) handleError(error)
    return (
        <div className={"about__club__text__wrapper"}>
            <h3 className="about__club__title">{(info.about_club_title !== "" && info.about_club_title !== null) ? info.about_club_title : title}</h3>
            <div className="about__club__text">{(info.about_club_description !== "" && info.about_club_description !== null) ?
                parse(`${info.about_club_description}`) : text}</div>
        </div>
    );
};

export default AboutClubTextBlock;
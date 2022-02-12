import React from 'react';
import Section1 from "../../components/Sections/MainPage/Section1/Section1";
import Section2 from "../../components/Sections/MainPage/Section2/Section2";
import Section3 from "../../components/Sections/MainPage/Section3/Section3";
import Section4 from "../../components/Sections/MainPage/Section4/Section4";
import Section5 from "../../components/Sections/MainPage/Section5/Section5";
import ReviewSection from "../../components/Sections/ReviewSection/ReviewSection";
import ReviewsSlider from "../../components/Sections/ReviewSlider/reviewsSlider";
import ReservedTable from "../../components/Sections/ReservedTable/ReservedTable";
import AboutClubTextBlock from "../../components/Sections/AboutClubTextBlock/AboutClubTextBlock";
import {useTranslation} from "react-i18next";
import MapAddressSection from "../../components/Sections/MapAddressSection/MapAddressSection";

const MainPage = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";
    return (
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4 showTitle locale={locale}/>
            <Section5 locale={locale}/>
            <ReviewSection/>
            <ReviewsSlider/>
            <ReservedTable locale={locale}/>
            <AboutClubTextBlock
                title={t("mainPage.aboutPrincess.title")}
                text={t("mainPage.aboutPrincess.description")}
                path={`/main`}
            />
            <MapAddressSection />
        </div>
    );
};

export default MainPage;
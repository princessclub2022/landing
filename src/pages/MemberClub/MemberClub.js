import React from 'react';
import TitleFirstSection from "../../components/TitleFirstSection/TitleFirstSection";
import {useTranslation} from "react-i18next";
import Section2 from "../../components/Sections/MemberClub/Section2/Section2";

const MemberClub = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru";
    return (
        <div>
            <TitleFirstSection
                title={t('memberClubPage.title')}
                // link={}
                btnText={t('memberClubPage.moreDetails')}
                coloredTitle={t('memberClubPage.coloredTitle')}
                description={t('memberClubPage.description')}
            />
            <Section2 />
        </div>
    );
};

export default MemberClub;
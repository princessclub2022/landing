import React, {useEffect, useState} from 'react';
import "./ComingSoon.scss";
import Logo from "../../components/Logo/logo";
import Timer from "../../components/Timer/Timer";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";
import alarm from "../../assets/pictures/buttonPicAlarm.svg";
import FooterBlock from "../../components/Footer/FooterBlock";
import {telegram_bot} from "../../env";
import MetaDecorator from "../../components/MetaDecorator";
import axios from "axios";


const ComingSoon = ({locale}) => {
    if (!locale) locale = "ru"
    const {t} = useTranslation();
    // const [allPhotos, setAllPhotos] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     getInfoFromCms(`/gallery`, setAllPhotos, setError, setLoading);
    // },[])
    // if (loading || allPhotos.length === 0) return <div>Loading...</div>
    return (
        <>
            <MetaDecorator title={"princessmensclub"} description={"princessclub"}/>
            <div className={"comming__soon__wrapper"}>
                <Logo locale={locale} className={"comming__soon"}/>
                <h1 className="coming__soon__title__wrapper">
                    {locale !== "en" ? <p className="comming__soon__title">{t("comming_soon.title_before")}</p> : null}
                    <span className="comming__soon__title__container">
                <p className="comming__soon__title colored">{t("name")}</p>
                <p className="comming__soon__title">{t("comming_soon.title_after")}</p>
                </span>
                </h1>
                <Timer/>

                <MainButton
                    href={telegram_bot}
                    picture={alarm}
                    btnText={t("buttons.remind")}
                    classNameButton={"comming__soon"}

                    onClick={() => {
                        axios({
                            method: 'GET',
                            url: `https://api.turbosms.ua/message/send.json?token=ab2c326c81ccd98b7ca537b0ce8e2210465f1f5b`,
                            headers: {
                                // "Authorization": `Basic ab2c326c81ccd98b7ca537b0ce8e2210465f1f5b`,
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                                'Content-Type': 'Content-Type: application/json',
                            },
                        })
                            .then((responce) => {
                                console.log(responce);
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }}
                />
                <FooterBlock/>
            </div>
        </>
    );
};

export default ComingSoon;
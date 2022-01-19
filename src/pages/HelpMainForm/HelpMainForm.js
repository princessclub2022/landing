import React, {useEffect, useState} from 'react';
import StepsRoutes from "../../components/StepRoutes/StepsRoutes";
import {useTranslation} from "react-i18next";
import {getInfoFromCms} from "../../api_requests";
import {useErrorHandler} from "react-error-boundary";
import Loader from "../../components/Loader/Loader";
import ErrorPage from "../ErrorPage/ErrorPage";
import Form from "../../components/MainForm/MainForm";
import MainForm from "../../components/MainForm/MainForm";


const HelpMainForm = ({locale}) => {
    const {t} = useTranslation();
    const [relatedQuestion, setRelatedQuestion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleError = useErrorHandler();

    useEffect(() => {
        getInfoFromCms(`/related-questions-forms?_locale=${locale}`, setRelatedQuestion, setError, setLoading)
    }, []);

    // if (relatedQuestion.length === 0 || loading) return <Loader/>

    if (error) {
        handleError(error)
        return <ErrorPage locale={locale}/>
    }
    console.log(relatedQuestion);
    return (
        <div className={"main__form__wrapper"}>
            {"Hi"}git
            {/*{relatedQuestion}*/}
            {/*<StepsRoutes*/}
            {/*    className={"main__form__page"}*/}
            {/*    locale={locale}*/}
            {/*    linkTwoText={t("mainForm.route")}*/}
            {/*/>*/}
            {/*<div className="form__main__wrapper">*/}
            {/*    <h2 className={"form__main__title"}>{t("mainForm.title")}</h2>*/}
            {/*    <MainForm relatedQuestion={relatedQuestion}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default HelpMainForm;
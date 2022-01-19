import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HelpInputSection from "../components/Sections/HelpInputSection/HelpInputSection";
import {getInfoFromCms} from "../api_requests";
import Loader from "../components/Loader/Loader";
import {useErrorHandler} from "react-error-boundary";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PageWrapper from "../pages/PageWrapper";
import NotFound from "../pages/NotFound/NotFound";
import i18n from "i18next";
import HelpMainForm from "../pages/HelpMainForm/HelpMainForm";

// const TradeView = React.lazy(() => import("../pages/TradeView/TradeView"));

const MainRoutes = (props) => {
    const [singleCategory, setSingleCategory] = useState([]);
    const [acceptedLang, setAcceptedLang] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleError = useErrorHandler();
    const locale = props.match.params.locale || "en";

    // When clicked back or forward in broser only after this language changed in t function from i18next
    if (i18n.language !== locale)  i18n.changeLanguage(locale);

    // useEffect(() => {
    //     console.log("000000000000000000000000000000")
    //     // getInfoFromCms(`/categories?_locale=${locale}`, setSingleCategory, setError, setLoading);
    //     // getInfoFromCms("/avaliable-languades", setAcceptedLang, setError, setLoading)
    // }, [locale]);


    // if (singleCategory.length === 0 || loading) return <Loader/>

    if (error) {
        handleError(error)
        return <ErrorPage locale={locale}/>
    }

    return (
        <>
            {/*<Header acceptedLang={acceptedLang} locale={locale}/>*/}
            {/*<HelpInputSection locale={locale}/>*/}
            <Switch>
                {/*<Redirect exact strict from={`/en/`} to={`/`}/>*/}
                {/*<Redirect exact strict from={`/en/:slug/`} to={`/:slug/`}/>*/}
                {/*<Redirect exact strict from={`/en/help-form/`} to={`/help-form/`}/>*/}



                {/*/!*delete later*!/*/}
                {/*<Redirect exact strict from={`/ru/`} to={`/`}/>*/}
                {/*<Redirect exact strict from={`/ru`} to={`/`}/>*/}
                {/*<Redirect exact strict from={`/ru/:slug`} to={`/:slug/`}/>*/}
                {/*<Redirect exact strict from={`/ru/:slug/`} to={`/:slug/`}/>*/}



                {/*<Redirect exact strict from={`/en`} to={`/`}/>*/}
                {/*<Redirect exact strict from={`/en/:slug`} to={`/:slug/`}/>*/}
                {/*<Redirect exact strict from={`/:slug`} to={`/:slug/`}/>*/}
                {/*<Redirect exact strict from={`/en/help-form`} to={`/help-form`}/>*/}
                {/*<Redirect exact strict from={`/${locale}/help-form`} to={`${locale}/help-form/`}/>*/}
                {/*<Redirect exact strict from={`/${locale}`} to={`/${locale}/`}/>*/}
                {/*<Redirect exact strict from={`/${locale}/:slug`} to={`/${locale}/:slug/`}/>*/}


                <Route exact strict path={`/help-form/`} render={() => <HelpMainForm locale={locale}/>}/>
                {/*<Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/:slug/`}*/}
                {/*       render={() => <PageWrapper locale={locale} singleCategory={singleCategory}/>}/>*/}
                {/*<Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/`}*/}
                {/*       render={() => <MainPage locale={locale}/>}/>*/}


                <Route exact strict path={`/`} render={() => <NotFound locale={locale}/>}/>
            </Switch>
            {/*<Footer locale={locale}/>*/}
        </>
    );
};

export default MainRoutes;


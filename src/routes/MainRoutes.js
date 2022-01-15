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

    useEffect(() => {
        console.log("000000000000000000000000000000")
        getInfoFromCms(`/categories?_locale=${locale}`, setSingleCategory, setError, setLoading);
        getInfoFromCms("/avaliable-languades", setAcceptedLang, setError, setLoading)
    }, [locale]);


    if (singleCategory.length === 0 || loading) return <Loader/>

    if (error) {
        handleError(error)
        return <ErrorPage locale={locale}/>
    }

    return (
        <>
            <Header acceptedLang={acceptedLang} locale={locale}/>
            <HelpInputSection locale={locale}/>
            <Switch>
                <Redirect exact strict from={`/en/`} to={`/`}/>
                <Redirect exact strict from={`/en/:slug/`} to={`/:slug/`}/>



                {/*delete later*/}
                <Redirect exact strict from={`/ru/`} to={`/`}/>
                <Redirect exact strict from={`/ru`} to={`/`}/>
                <Redirect exact strict from={`/ru/:slug`} to={`/:slug/`}/>
                <Redirect exact strict from={`/ru/:slug/`} to={`/:slug/`}/>


                {/*//without slash at the end*/}
                <Redirect exact strict from={`/en`} to={`/`}/>
                <Redirect exact strict from={`/en/:slug`} to={`/:slug/`}/>
                <Redirect exact strict from={`/:slug`} to={`/:slug/`}/>
                <Redirect exact strict from={`/${locale}`} to={`/${locale}/`}/>
                <Redirect exact strict from={`/${locale}/:slug`} to={`/${locale}/:slug/`}/>


                <Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/:slug/`}
                       render={() => <PageWrapper locale={locale} singleCategory={singleCategory}/>}/>
                <Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/`}
                       render={() => <MainPage locale={locale}/>}/>

                <Route exact strict path={`/*`} render={() => <NotFound locale={locale}/>}/>
            </Switch>
            <Footer locale={locale}/>
        </>
    );
};

export default MainRoutes;


// <Routes>
//     <Route path={`/`} element={<MainPage/>} props/>
//     <Route path={`en`} element={<Navigate to={"/"} replace/>}/>
//     <Route path={`en/`} element={<Navigate to={"/"} replace/>}/>
//     <Route path={`${i18n.language}/`} element={<MainPage/>}/>
//     {/*/!*<Route path={`${locale !== "en" ? `/${locale}/` : "/"}`} element={<MainPage/>}/>*!/*/}
// </Routes>

// <Switch>
// <Redirect exact strict from={`/en/`} to={`/`}/>
// <Redirect exact strict from={`/en/:category/`} to={`/:category/`}/>
// <Redirect exact strict from={`/en/:category/:article/`} to={`/:category/:article/`}/>
// {/*//before articles only in English*/}
// <Redirect exact strict from={`/${locale}/:category/:article/}`} to={`/:category/:article/`}/>
// <Redirect exact strict from={`/${locale}/:category/:article}`} to={`/:category/:article/`}/>
//
// {/*//without slash at the end*/}
// <Redirect exact strict from={`/en`} to={`/`}/>
// <Redirect exact strict from={`/en/:category`} to={`/:category/`}/>
// <Redirect exact strict from={`/en/:category/:article`} to={`/:category/:article/`}/>
// <Redirect exact strict from={`/${locale}`} to={`/${locale}/`}/>
// <Redirect exact strict from={`/${locale}/:category`} to={`/${locale}/:category/`}/>
//
// {/*{exactArticle}*/}
//
// {/*//before articles only in English*/}
// {/*<Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/:category/:article/`} render={() => <Article*/}
// {/*    locale={locale}*/}
// {/*    singleCategory={singleCategory}*/}
// {/*/>}/>*/}
// <Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/:category/`} render={() => <SingleCategory
//     locale={locale}
//     singleCategory={singleCategory}
// />}/>
// <Route exact strict path={`${locale === "en" ? "" : `/${locale}`}/`} render={() => <MainPage/>}/>
// {/*<Route exact strict path={`/:category/:article/`} render={() => <Article*/}
// {/*    locale={locale}*/}
// {/*    singleCategory={singleCategory}*/}
// {/*/>}/>*/}
// {/*<Route exact strict path={`/:category/`} render={() => <SingleCategory*/}
// {/*    locale={locale}*/}
// {/*    singleCategory={singleCategory}*/}
// {/*/>}/>*/}
// {/*<Route exact strict path={`/`} render={() => <MainPage/>}/>*/}
//
// {/*<Route exact strict path={`/*`} render={() => < NotFound/>}/>*/}
// </Switch>
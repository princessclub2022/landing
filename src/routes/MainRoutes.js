import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useErrorHandler} from "react-error-boundary";
import i18n from "i18next";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage/MainPage";
import ReserveTableForm from "../pages/ReserveTableForm/ReserveTableForm";
import Gallery from "../pages/Gallery/Gallery";
import MemberClub from "../pages/MemberClub/MemberClub";

// const TradeView = React.lazy(() => import("../pages/TradeView/TradeView"));


const MainRoutes = (props) => {
    // const [acceptedLang, setAcceptedLang] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);

    const locale = props.match.params.locale || "ru";

    // When clicked back or forward in broser only after this language changed in t function from i18next
    if (i18n.language !== locale) i18n.changeLanguage(locale);

    // if (singleCategory.length === 0 || loading) return <Loader/>
    // if (error) {
    //     handleError(error)
    //     return <ErrorPage locale={locale}/>
    // }




    return (
        <>
            <Header locale={locale}/>
            <Switch>
                <Redirect exact strict from={`/ru/`} to={`/`}/>
                <Redirect exact strict path={`/ru/zabronirovat-stol-onlajn/`} to={"/zabronirovat-stol-onlajn/"}/>

                {/*redirects without slash at the end*/}
                <Redirect exact strict from={`/ru`} to={`/`}/>
                <Redirect exact strict from={`/${locale}`} to={`/${locale}/`}/>

                {/*<Route exact strict path={`/${locale}/*`} render={() => <ComingSoon locale={locale}/>}/>*/}
                <Route exact strict path={`/`} render={() => <MainPage locale={locale}/>}/>
                <Route exact strict path={`${locale === "ru" ? '' : `/${locale}`}/`} render={() => <MainPage locale={locale}/>}/>
                {/*бронь форма сталоа*/}
                <Route exact strict path={`/zabronirovat-stol-onlajn/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/ua/zabronuvatyt-stil-onlajn/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/en/booking/`} render={() => <ReserveTableForm locale={locale}/>}/>
                {/*день рождения в клюбе*/}
                <Route exact strict path={`/den-rozhdeniya-v-strip-klube/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/ua/den-narodjennya-v-strip-klubi/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/en/birthday-at-strip-club/`} render={() => <ReserveTableForm locale={locale}/>}/>
                {/*Мальчишник*/}
                <Route exact strict path={`/malchishnik/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/ua/malchishnik/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                <Route exact strict path={`/en/bachelor-party/`} render={() => <ReserveTableForm locale={locale}/>}/>
                {/*Членство в клубе*/}
                <Route exact strict path={`/chlenstvo-v-klube/`}
                       render={() => <MemberClub locale={locale}/>}/>
                <Route exact strict path={`/ua/chlenstvo-v-klubi/`}
                       render={() => <MemberClub locale={locale}/>}/>
                <Route exact strict path={`/en/membership-card/`} render={() => <MemberClub locale={locale}/>}/>
                {/*Караоке*/}
                <Route exact strict path={locale === "ru" ? `/karaoke/` : `/${locale}/karaoke/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                {/*About*/}
                <Route exact strict path={locale === "ru" ? `/about/` : `/${locale}/about/`}
                       render={() => <ReserveTableForm locale={locale}/>}/>
                {/*<Route exact strict path={`/*`} render={() => <ComingSoon locale={locale}/>}/>*/}
                <Route exact strict path={`/galereya/`} component={Gallery}/>
                <Route exact strict path={`/ua/galereya/`} component={Gallery}/>
                <Route exact strict path={`/en/gallery/`} component={Gallery}/>

            </Switch>
        </>
    );
};

export default MainRoutes;


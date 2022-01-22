import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {useErrorHandler} from "react-error-boundary";
import i18n from "i18next";
import ComingSoon from "../pages/ComingSoon/ComingSoon";

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
            <Switch>
                <Redirect exact strict from={`/ru/`} to={`/`}/>
                <Redirect exact strict from={`/ru`} to={`/`}/>
                <Redirect exact strict from={`/ru/*`} to={`/`}/>
                <Redirect exact strict from={`/${locale}`} to={`/${locale}/`}/>
                <Route exact strict path={`/${locale}/`} render={() => <ComingSoon locale={locale}/>}/>
                <Redirect exact strict from={`/${locale}/*`} to={`/${locale}/`}/>

                <Route exact strict path={`/${locale}/*`} render={() => <ComingSoon locale={locale}/>}/>
                <Route exact strict path={`/`} render={() => <ComingSoon locale={locale}/>}/>
                <Route exact strict path={`/*`} render={() => <ComingSoon locale={locale}/>}/>
            </Switch>
        </>
    );
};

export default MainRoutes;


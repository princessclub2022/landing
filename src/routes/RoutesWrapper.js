import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import MainRoutes from './MainRoutes';
// import ScrollToTop from "../components/Buttons/ScrollToTop/ScrollToTop";

const RoutesWrapper = () => {
    const base = '/:locale(en|ru|it)?';
    return (
        <>
            <BrowserRouter>
                {/*<ScrollToTop/>*/}
                <Route path={base} component={(props) => <MainRoutes {...props}/>}/>
            </BrowserRouter>
        </>
    );
};

export default RoutesWrapper;
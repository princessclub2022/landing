import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import MainRoutes from './MainRoutes';

const RoutesWrapper = () => {
    const base = '/:locale(en|ru|ua)?';
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
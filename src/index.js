import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ErrorBoundary} from "react-error-boundary";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import {initReactI18next} from "react-i18next";
import NotFound from "./pages/NotFound/NotFound";


const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo)
}

i18n.on('changeLanguage', function (lng) {
    if (lng === i18n.options.fallbackLng[0]) {
        if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
            const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '');
            window.location.replace(newUrl)
        }
    }
})

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        whitelist: ["en", "ru", "it"],
        supportedLngs: ["en", "ru", "it"],
        fallbackLng: ['en'],
        // defaultNS: 'common',
        // preload: ["en"],
        // lng: "en",
        detection: {
            order: ['localStorage', 'path',  'navigator', 'cookie', 'subdomain'],
            // order: ['path', "querystring",'localStorage',  'navigator', 'cookie', 'subdomain'],
            caches: ['localStorage'],
            lookupFromPathIndex: 0,
            checkWhitelist: true,
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    });



const fallbackMarkup = (
    <div>Loading ...</div>
)

ReactDOM.render(
    <Suspense fallback={fallbackMarkup}>
            <ErrorBoundary FallbackComponent={NotFound} onError={errorHandler}>
                <App/>
            </ErrorBoundary>
    </Suspense>,
    document.getElementById('root')
);

reportWebVitals();

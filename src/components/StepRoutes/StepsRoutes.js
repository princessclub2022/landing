import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import next from "../../assets/pictures/step-route.svg";
import "./StepRoutes.scss";

const StepsRoutes = ({locale, linkTwo, linkTwoText, linkThreeText, className = ''}) => {
    const {t} = useTranslation();
    return (
        <div className={`routes__step__wrapper ${className}`}>
            <Link to={locale !== "en" ? `/${locale}/` : "/"}
                  className={`routes__step__link ${className}`}
            >
                {t("routesSteps.home")}
            </Link>
            <img src={next} alt={"step"} className={`step__route__img ${className}`}/>
            {linkTwo ?
                // <Link to={{pathname: locale !== "en" ? `/${locale}/${linkTwo}/` : `/${linkTwo}/`, state: {link: `${linkTwoText}`}}}
                <Link to={locale !== "en" ? `/${locale}${linkTwo}` : `${linkTwo}`}
                    className={`routes__step__link ${className}`}
                >
                    {linkTwoText}
                </Link> : null}
            {(!linkTwo && linkTwoText) ?
                <p className={`step__routes__text ${!linkThreeText ? "active" : ""}`}>{linkTwoText}</p> : null}

            {linkThreeText ? <img src={next} alt={"step"} className="step__route__img"/> : null}
            {linkThreeText ? <p className={`step__routes__text active`}>{linkThreeText}</p> : null}
        </div>
    );
};

export default StepsRoutes;
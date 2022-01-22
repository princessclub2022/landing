import React from 'react';
import SocialButtons from "../Buttons/SocialButtons/SocialButtons";
import Separator from "../Separator";
import {useTranslation} from "react-i18next";
import "./Footer.scss";
import {main_site} from "../../env";

const FooterBlock = () => {
    const {t} = useTranslation();
    return (
        <div className={"footer__block__container"}>
            <h6 className="comming__soon__social__title">{t("social_buttons_title")}</h6>
            <SocialButtons/>
            <Separator className={"comming_soon"}/>
            <div className="footer__rights">
                <span className="rights__before__year">
                    {t("footer.name")}
                    <p className="rights__year">{`2018 - ${new Date().getFullYear()} .`}</p>
                </span>
                <p className="rights__after__year">{t("footer.rights")}</p>
            </div>
            <a href={main_site} className="footer__link">{t("comming_soon.main_website")}</a>
        </div>
    );
};

export default FooterBlock;
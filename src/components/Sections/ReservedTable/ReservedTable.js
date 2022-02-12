import React from 'react';
import "./ReserdevTable.scss";
import MainButton from "../../Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";

const ReservedTable = ({locale}) => {
    const {t} = useTranslation();
    if (!locale) locale = localStorage.getItem("i18nextLng") || "ru"

    return (
        <div className={"reserved__table__wrapper"}>
            <div className={"reserved__table__container"}>
                <h3 className="reserved__table__title">{t("mainPage.commonReservedTable.title")}</h3>
                <MainButton
                    classNameButton={"reserved__table"}
                    link={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                        locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                    btnText={t("buttons.reserveTable")}
                />
            </div>
        </div>
    );
};

export default ReservedTable;
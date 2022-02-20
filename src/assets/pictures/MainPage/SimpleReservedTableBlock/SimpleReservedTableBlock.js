import React from 'react';
import {useTranslation} from "react-i18next";
import MainButton from "../../../../components/Buttons/MainButton/MainButton";
import "../../../../App.scss"

const SimpleReservedTableBlock = () => {
    const locale = localStorage.getItem("i18nextLng") || "ru"
    const {t} = useTranslation();
    return (
        <div className={"simple__reserved__table__block"}>
            <div className={"simple__reserved__table__block__container"}>
                <h3 className="simple__reserved__table__block__title">{t("gallery.reservedTableBlock")}</h3>
                <MainButton link={locale === "ru" ? `/zabronirovat-stol-onlajn/` :
                    locale === "ua" ? `/ua/zabronuvatyt-stil-onlajn/` : `/en/booking/`}
                            classNameButton={"simple__reserved__table"}
                            btnText={t("buttons.reserveTable")}/>
            </div>
        </div>
    );
};

export default SimpleReservedTableBlock;
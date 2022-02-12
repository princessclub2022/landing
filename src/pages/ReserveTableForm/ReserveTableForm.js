import React from 'react';
import {useTranslation} from "react-i18next";
import MainForm from "../../components/MainForm/MainForm";
import "./ReserveTableForm.scss";

const ReserveTableForm = () => {
    const {t} = useTranslation();
    return (
        <div className={"reserved__table__page__wrapper"}>
            <div className={"reserved__table__page__container"}>
                <h1 className="table__reserved__title">{t("reservedTablePage.title")}</h1>
                <div className="form__wrap">
                    <MainForm/>
                </div>
            </div>
        </div>
    );
};

export default ReserveTableForm;
import React from 'react';
// import "./HelpForm.scss";

import {BiErrorCircle} from "react-icons/bi";
import MainButton from "../../components/Buttons/MainButton/MainButton";
import {useTranslation} from "react-i18next";

const ErrorModal = ({openModal, onErrorModalInfo}) => {
    const {t} = useTranslation()
    return (
        <div className={"error__modal__form"}>
            <BiErrorCircle />
            <p className="success__modal__form__title">{t("mainForm.error_modal.title")}</p>
            {onErrorModalInfo ? <p className="success__modal__form__description">{onErrorModalInfo}</p> : null}
            <MainButton
                classNameButton={"success__modal__form__button"}
                btnText={t("mainForm.success_modal.button")}
                onClick={openModal}
            />
        </div>
    );
};

export default ErrorModal;
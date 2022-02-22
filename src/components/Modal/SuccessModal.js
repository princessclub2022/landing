import React from 'react';
import {AiOutlineCheckCircle} from "react-icons/ai";
import send from "../../assets/pictures/phone2.svg";
import {useTranslation} from "react-i18next";
import MainButton from "../../components/Buttons/MainButton/MainButton";
// import "./HelpForm.scss";

const SuccessModal = ({openModal}) => {
    const {t} = useTranslation()
    return (
        <div className={"success__modal__form"}>
            <AiOutlineCheckCircle/>
            <p className="success__modal__form__title">{t("mainForm.success_modal.title")}</p>
            <p className="success__modal__form__description">{t("mainForm.success_modal.description")}</p>
            <MainButton
                classNameButton={"success__modal__form__button"}
                btnText={t("mainForm.success_modal.button")}
                onClick={openModal}
            />
            <div className="success__modal__form__attention">
                <img className={"success__modal__form__attention__pic"} src={send} alt="attention"/>
                <span
                    className="success__modal__form__attention__text">{t("mainForm.success_modal.attention_block")}</span>
            </div>
        </div>
    );
};

export default SuccessModal;
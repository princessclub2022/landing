import React, {useEffect, useState} from 'react';
import {Formik, Form} from "formik";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import MainButton from "../Buttons/MainButton/MainButton";
import {formatText} from "../../data/landing-variables";
import axios from "axios";
import {CMS, TURBO_SMS_BASE_URL, TURBO_SMS_TOKEN} from "../../env";
import "./MainForm.scss";
import Modal from "../Modal/Modal";
import SuccessModal from "../Modal/SuccessModal";
import ErrorModal from "../Modal/ErrorModal";
// import {formatText} from "../../utils_functions";
// import Modal from "../Modal/Modal";
// import SuccessModal from "../../pages/HelpMainForm/SuccessModal";
// import ErrorModal from "../../pages/HelpMainForm/ErrorModal";

const INITIAL_FORM_STATE = {
    name: '',
    phone: '',
    timeRadio: ``,
    clubRadio: ''
}


const timeOptions = [
    {key: "20:00", value: "20:00", checked: true},
    {key: "20:30", value: "20:30"},
    {key: "21:00", value: "21:00"},
    {key: "21:30", value: "21:30"},
    {key: "22:00", value: "22:00"},
    {key: "22:30", value: "22:30"},
    {key: "23:00", value: "23:00"},
    {key: "23:30", value: "23:30"},
    {key: "00:00", value: "00:00"},
    {key: "00:30", value: "00:30"},
    {key: "01:00", value: "01:00"},
    {key: "01:30", value: "01:30"}
]
const clubsOptions = [
    {key: "Princess Men’s Club (ул. Крещатик 14)", value: "Princess Men’s Club (ул. Крещатик 14)", checked: true},
    {
        key: "Princess Men's Club Strip & Karaoke (бул. Леси Украинки 34)",
        value: "Princess Men's Club Strip & Karaoke (бул. Леси Украинки 34)"
    }
]

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const MainForm = ({relatedQuestion}) => {
    const {t} = useTranslation();
    const locale = localStorage.getItem("i18nextLng");

    const [toggleModal, setToggleModal] = useState(false);
    const [successSubmit, setSuccessSubmit] = useState(false);
    const [onErrorModalInfo, setOnErrorModalInfo] = useState('');
    const openModal = () => setToggleModal(!toggleModal);

    useEffect(() => {
        const defaultValue = document.querySelector(".form__control.timeRadio_input > div > div > input")
        // defaultValue.setAttributeNode("checked")
    },[])

    const validate = Yup.object({
        name: Yup.string()
            .required(`${t("reservedTablePage.formError.requered")}`),
        phone: Yup.string()
            .min(8, `${t("reservedTablePage.formError.phone")}`)
            .matches(phoneRegExp, `${t("reservedTablePage.formError.phone")}`)
            .required(`${t("reservedTablePage.formError.requered")}`),
        timeRadio: Yup.string()
            .required(`${t("reservedTablePage.formError.requered")}`),
        clubRadio: Yup.string()
            .required(`${t("reservedTablePage.formError.requered")}`),
    })


    const handleSubmit = (values) => {
        //     console.log("values", values);
        //     // let formElement = document.querySelector("Form");
        //     // console.log(formElement);
        //     // const formData = new FormData(formElement)
        //     // console.log("formData", formData);
    }

    return (
        <>
            <Formik
                initialValues={{
                    ...INITIAL_FORM_STATE
                }}
                validationSchema={validate}
                onSubmit={(values, onSubmitProps) => {
                    console.log(values);
                    onSubmitProps.setSubmitting(true);
                    const data = {
                        name: `${values.name}`,
                        phone: `${values.phone}`,
                        email: `${values.phone}`,
                        time: `${values.timeRadio}`,
                        club: `${values.clubRadio}`
                    }
                    openModal()
                    // axios({
                    //     method: 'POST',
                    //     url: `${CMS}/emails`,
                    //     data: data,
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    // })
                    //     .then((responce) => {
                    //         console.log(responce);
                    //         handleSubmit(values);
                    //         openModal();
                    //         onSubmitProps.resetForm();
                    //     })
                    //     .catch((error) => {
                    //
                    //     })
                    axios({
                        method: 'POST',
                        url: `${TURBO_SMS_BASE_URL}/message/ping.json`,
                        // Authorization: `${TURBO_SMS_TOKEN}`,
                        headers: {
                            "Authorization": `${TURBO_SMS_TOKEN}`,
                            'Content-Type': 'Content-Type: application/json',
                        },
                    })
                        .then((responce) => {
                            console.log(responce);
                            handleSubmit(values);
                            openModal();
                            onSubmitProps.resetForm();
                        })
                        .catch((error) => {

                        })
                    onSubmitProps.setSubmitting(false);
                    onSubmitProps.resetForm();
                }}>
                {({errors, setFieldValue, touched}) => (
                    <Form className={"main__form"}>
                        <div className="form__input__container">
                            <div className="form__grid double__columns__wrapper">
                                <div>
                                    <div className="form__grid double__columns">
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            label={`${t("reservedTablePage.form.name")}`}
                                            name="name"
                                            placeholder={`${t("reservedTablePage.form.name_placeholder")}`}
                                            className={"name_input"}
                                            picture="true"
                                            errors={errors}
                                            autoComplete="off"
                                        />
                                        <FormikControl
                                            control="input"
                                            // type="text"
                                            label={`${t("reservedTablePage.form.tel")}`}
                                            name="phone"
                                            placeholder={`${t("reservedTablePage.form.tel_placeholder")}`}
                                            className={"phone_input"}
                                            picture="true"
                                            errors={errors}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <FormikControl
                                        control="radio"
                                        label={`${t("reservedTablePage.form.time_placeholder")}`}
                                        name="timeRadio"
                                        options={timeOptions}
                                        className={"timeRadio_input"}
                                        picture="true"
                                        errors={errors}
                                    />
                                    <FormikControl
                                        control="radio"
                                        label={`${t("reservedTablePage.form.club_placeholder")}`}
                                        name="clubRadio"
                                        options={clubsOptions}
                                        className={"clubRadio_input"}
                                        picture="true"
                                        errors={errors}
                                    />
                                </div>
                                <MainButton
                                    classNameButton={"main__form__btn"}
                                    btnText={t("buttons.submit")}
                                    type={"submit"}
                                    // disabled={Object.keys(errors).length !== 0 || errors.file}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <>
                {toggleModal ? <Modal
                        className={"booking__form"}
                        active={toggleModal}
                        setActive={setToggleModal}
                        onClose={() => setToggleModal(false)}
                    >
                        <>{successSubmit ? <SuccessModal openModal={openModal}/> :
                            <>
                                <ErrorModal openModal={openModal} onErrorModalInfo={onErrorModalInfo}/>
                                {/*<SuccessModal openModal={openModal}/>*/}
                            </>}
                        </>
                    </Modal>
                    : null}
            </>
        </>
    );
};

export default MainForm;

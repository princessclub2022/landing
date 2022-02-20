import React, {useEffect, useState} from 'react';
import {Formik, Form} from "formik";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import MainButton from "../Buttons/MainButton/MainButton";
import {formatText} from "../../data/landing-variables";
// import "./MainForm.scss";
// import {formatText} from "../../utils_functions";
// import Modal from "../Modal/Modal";
// import SuccessModal from "../../pages/HelpMainForm/SuccessModal";
// import ErrorModal from "../../pages/HelpMainForm/ErrorModal";

const INITIAL_FORM_STATE = {
    name: '',
    phone: '',
    timeRadio: '',
    clubRadio: '',
    id: ''
}


const timeOptions = [
    {key: "20:00", value: "20:00"},
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
    {key: "Princess Men’s Club (ул. Крещатик 14)", value: "Princess Men’s Club (ул. Крещатик 14)"},
    {
        key: "Princess Men's Club Strip & Karaoke (бул. Леси Украинки 34)",
        value: "Princess Men's Club Strip & Karaoke (бул. Леси Украинки 34)"
    }
]

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const MainForm = ({relatedQuestion}) => {
    const {t} = useTranslation();
    // const visitor_uid = window.AMOPIXEL_IDENTIFIER.getVisitorUid() ;
    const [toggleModal, setToggleModal] = useState(false);
    const [successSubmit, setSuccessSubmit] = useState(false);
    const [onErrorModalInfo, setOnErrorModalInfo] = useState('');
    const openModal = () => setToggleModal(!toggleModal);
    let visitor_uid = window.AMOPIXEL_IDENTIFIER.getVisitorUid ( ) ;
    console.log(visitor_uid);
    const validate = Yup.object({
        name: Yup.string(),
        // .required(`${t("reservedTablePage.formError.requered")}`),
        phone: Yup.string(),
        // .min(8, `${t("reservedTablePage.formError.phone")}` )
        // .matches(phoneRegExp, `${t("reservedTablePage.formError.phone")}`)
        // .required(`${t("reservedTablePage.formError.requered")}`),
        timeRadio: Yup.string(),
        // .required(`${t("reservedTablePage.formError.requered")}`),
        clubRadio: Yup.string(),
        // .required(`${t("reservedTablePage.formError.requered")}`),
    })
    // const visitor_uid = AMOPIXEL_IDENTIFIER.getVisitorUid() ;
    // console.log(visitor_uid);
    //


    // useEffect(() => {
    //
    //     // window.AMOPIXEL_IDENTIFIER_PARAMS = window.AMOPIXEL_IDENTIFIER_PARAMS || {};
    //     // window.AMOPIXEL_IDENTIFIER_PARAMS.onload = () => {
    //     //     // const visitor_uid = pixel_identifier.getVisitorUid(); // Получаем visitor_uid
    //     //     let visitor_uid = window.AMOPIXEL_IDENTIFIER.getVisitorUid ( ) ;
    //     //     console.log(visitor_uid);
    //         if (visitor_uid) {
    //             // Записываем его в скрытое поле формы 'visitor_uid'
    //             console.log(document.getElementById('visitor_uid'));
    //             document.getElementById('visitor_uid').value = visitor_uid;
    //         }
    //     // };
    // }, [])

    // const handleSubmit = (values) => {
    //     console.log("values", values);
    //     // let formElement = document.querySelector("Form");
    //     // console.log(formElement);
    //     // const formData = new FormData(formElement)
    //     // console.log("formData", formData);
    // }

    return (
        <>
            <Formik
                initialValues={{
                    ...INITIAL_FORM_STATE
                }}
                validationSchema={validate}
                onSubmit={(values, onSubmitProps) => {
                    console.log(values);
                    document.getElementById('visitor_uid')
                    axios.post
                    // onSubmitProps.setSubmitting(true);
                    // handleSubmit(values);
                    // openModal();
                    // onSubmitProps.setSubmitting(false);
                    // onSubmitProps.resetForm();\
                    if (visitor_uid) {
                        // Записываем его в скрытое поле формы 'visitor_uid'
                        console.log(document.getElementById('visitor_uid'));
                        document.getElementById('visitor_uid').value = visitor_uid;
                    }

                }}>
                {({errors, setFieldValue, touched}) => (
                    <Form className={"main__form"}>
                        <div className="form__input__container">
                            <div className="form__grid double__columns__wrapper">
                                <div>
                                    <div className="form__grid double__columns">
                                        <FormikControl
                                            control="input"
                                            // type="text"
                                            label={`${t("reservedTablePage.form.name")}`}
                                            name="name"
                                            // placeholder={`${t("reservedTablePage.form.name_placeholder")}`}
                                            className={"name_input"}
                                            picture="true"
                                            errors={errors}
                                        />
                                        <FormikControl
                                            control="input"
                                            // type="text"
                                            label={`${t("reservedTablePage.form.tel")}`}
                                            name="phone"
                                            // placeholder={`${t("reservedTablePage.form.tel_placeholder")}`}
                                            className={"phone_input"}
                                            picture="true"
                                            errors={errors}
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
                                    classNameButton={"main__form"}
                                    btnText={t("buttons.submit")}
                                    type={"submit"}
                                    // disabled={Object.keys(errors).length !== 0 || errors.file}
                                />
                                {/*<FormikControl*/}
                                {/*    control="text"*/}
                                {/*    label={""}*/}
                                {/*    name="id"*/}
                                {/*    id={"visitor_uid"}*/}
                                {/*    errors={errors}*/}
                                {/*/>*/}
                                <input type="text" value={visitor_uid}/>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <>
                {/*{toggleModal ? <Modal*/}
                {/*        className={"main_form"}*/}
                {/*        active={toggleModal}*/}
                {/*        setActive={setToggleModal}*/}
                {/*        onClose={() => setToggleModal(false)}*/}
                {/*    >*/}
                {/*        <>{successSubmit ? <SuccessModal openModal={openModal}/> :*/}
                {/*            <>*/}
                {/*                <ErrorModal openModal={openModal} onErrorModalInfo={onErrorModalInfo}/>*/}
                {/*                /!*<SuccessModal openModal={openModal}/>*!/*/}
                {/*            </>}*/}
                {/*        </>*/}
                {/*    </Modal>*/}
                {/*    : null}*/}
            </>
        </>
    );
};

export default MainForm;

import React, {useState} from 'react';
import {Formik, Form} from "formik";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import DragDropUploaderFile from "./DragDropUploaderFile";
import FormikControl from "./FormikControl";
import MainButton from "../Buttons/MainButton/MainButton";
import savePic from "../../assets/pictures/donwload.svg";


const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    select: '',
    subject: '',
    description: '',
    attachment: [],
    year: '',
}


// /related-questions-forms

const MainForm = ({relatedQuestion}) => {
    const {t} = useTranslation();
    const [toggleModal, setToggleModal] = useState(true);
    const openModal = () => setToggleModal(!toggleModal);
    const exactQuestions = relatedQuestion.length > 0 ? relatedQuestion.map(el => el.value) : [];
    const digitsOnly = (value) => /^\d{4}/.test(value);
    const validate = Yup.object({
        name: Yup.string()
            .min(3, `${t("mainForm.text_error")}`)
            .required(`${t("mainForm.main_error")}`),
        email: Yup.string()
            .email(`${t("mainForm.email_error")}`)
            .required(`${t("mainForm.main_error")}`),
        select: Yup.string().oneOf(exactQuestions).required(`${t("mainForm.main_error")}`),
        // select: Yup.string().required(`${t("mainForm.main_error")}`),
        subject: Yup.string()
            .min(3, `${t("mainForm.text_error")}`)
            .required(`${t("mainForm.main_error")}`),
        description: Yup.string()
            .min(20, `${t("mainForm.description_error")}`)
            .required(`${t("mainForm.main_error")}`),
        attachment: Yup.mixed().required(`${t("mainForm.main_error")}`),
        year: Yup.string()
            .max(4, `${t("mainForm.years_error")}`)
            .min(4, `${t("mainForm.years_error")}`)
            .test('Digits only', 'The field should have digits only', digitsOnly)
            .required(`${t("mainForm.years_error")}`)

    })

    // .required(`${t("mainForm.years_error")}`)
    // if(relatedQuestion.length === 0) return <ErrorPage />

    const handleSubmit = (values, onSubmitProps) => {
        if (values.attachment.length === 0) {
            openModal()
            // setError(true);
            return
        }
        // let formElement = document.querySelector("Form")
        // const formData = new FormData(values)

        console.log(values);

        // console.log(values);
        // console.log(JSON.parse(JSON.stringify(values)));
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
    }


    return (
        <Formik
            initialValues={{
                ...INITIAL_FORM_STATE
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}>{({touched, setFieldTouched, setFieldValue}) => (
            <Form>
                <div className="form_input_container">
                    <FormikControl control="input" type="text" label={`${t("mainForm.name")}`} name="name"
                                   placeholder={`${t("mainForm.name_placeholder")}`}/>
                    <FormikControl control="input" type="email" label={`${t("mainForm.email")}`} name="email"
                                   placeholder={`${t("mainForm.email_placeholder")}`}/>
                </div>
                <FormikControl control="select" label={`${t("mainForm.question")}`} name="select"
                               placeholder={`${t("mainForm.question_placeholder")}`} options={relatedQuestion}
                               defaultSelect={`${t("mainForm.question_placeholder")}`}/>
                <FormikControl control="input" type="text" label={`${t("mainForm.subject")}`} name="subject"
                               placeholder={`${t("mainForm.subject_placeholder")}`}/>

                <FormikControl control="textarea" label={`${t("mainForm.description")}`} name="description"
                               placeholder={`${t("mainForm.description_placeholder")}`}/>
                <DragDropUploaderFile
                    name={'attachment'}
                    setFieldValue={setFieldValue}
                    pic={savePic}
                    alt={"upload or browse"}
                    title={t("mainForm.attachments_placeholder")}
                    subtitle={t("mainForm.attachments_placeholder_colored")}
                />
                <FormikControl control="input" type="number" label={`${t("mainForm.years")}`} name="year"
                               placeholder={`${t("mainForm.years_placeholder")}`}/>
                <MainButton
                    classNameButton={"main__form__button"}
                    btnText={t("mainForm.submit_button")}
                    type={"submit"}/>
            </Form>
        )}
        </Formik>
    );
};

export default MainForm;


// <FormInput placeholder={`${t("mainForm.name_placeholder")}`}/>
// <FormInput placeholder={`${t("mainForm.email_placeholder")}`}/>
//
// <FormSelect placeholder={`${t("mainForm.question_placeholder")}`}/>
// <FormInput placeholder={`${t("mainForm.subject_placeholder")}`}/>
// <FormInput placeholder={`${t("mainForm.description_placeholder")}`}/>
//
// <FormInput placeholder={`${t("mainForm.name_placeholder")}`}/>
import React from 'react';
import FormInput from "./Inputs/FormInput";
import Textarea from "./Inputs/Textarea";
import RadioButtons from "./Inputs/RadioButtons";
import CheckboxGroup from "./Inputs/CheckboxGroup";

// yup
// radioOptions: ''
// radioOptions: Yup.string().required("")
// checkboxOptions: []
// checkboxOptions: Yup.array().required("")
// date: null
// checkboxOptions: Yup.date().required("").nullable()

const FormikControl = (props) => {
    const {control, ...rest} = props;
    switch (control) {
        case "input" :
            return <FormInput {...rest} />
        case "radio" :
            return <RadioButtons {...rest} />
        default:
            return null
    }
};

export default FormikControl;
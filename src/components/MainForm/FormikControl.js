import React from 'react';
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

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
        case "textarea" :
            return <Textarea {...rest} />
        case "select" :
            return <FormSelect {...rest} />
        case "radio" :
            return <RadioButtons {...rest} />
        case "checkbox":
            return <CheckboxGroup {...rest} />
        case "date":
            return <DatePicker {...rest} />
        default:
            return null
    }
};

export default FormikControl;
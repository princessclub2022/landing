import React from 'react';
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError";

const Textarea = (props) => {
    const {label, name,errors,  ...rest} = props;
    return (
        <div className={`form__control ${props.className ? props.className : ""}`}>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} className={(errors !== undefined && errors[name])? "error_input" : "field_input"}/>
            <ErrorMessage name={name} component={TextError} {...rest}/>
        </div>
    );
};

export default Textarea;
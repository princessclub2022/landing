import React from 'react';
import {Field, ErrorMessage} from "formik";
import TextError from "./TextError";

const FormSelect = (props) => {
    const {label, name, options, placeholder, defaultSelect, ...rest} = props;
    return (
        <div className={`form__control ${props.className ? props.className : ""}`}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest} >
                {defaultSelect ? <option value={``}>
                    {defaultSelect}
                </option> : null}
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default FormSelect;
import React from 'react';
import {Field, ErrorMessage} from "formik";
import TextError from "../TextError";

const RadioButtons = (props) => {
    const {label, name, options, ...rest} = props;
    return (
        <div className={`form__control ${props.className ? props.className : ""}`}>
            <label htmlFor={name}>{label}</label>
            <Field name={name} {...rest} >
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input type="radio" id={option.value} {...field} value={option.value}
                                           checked={field.value === option.value}/>
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} {...rest}/>
        </div>
    );
};

export default RadioButtons;
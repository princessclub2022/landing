// import React from 'react';
// import {ErrorMessage, Field} from "formik";
// import TextError from "./TextError";
// import DateView from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
//
// const DatePicker = (props) => {
//     const {label, name, ...rest} = props;
//     return (
//         <div className={`form__control ${props.className ? props.className : ""}`}>
//             <label htmlFor={name}>{label}</label>
//             <Field name={name} {...rest} >
//                 {
//                     ({form, field}) => {
//                         const {setFieldValue} = form
//                         const {value} = field
//                         return <DateView id={name} {...field} {...rest} selected={value}
//                                          onChange={val => setFieldValue(name, val)}/>
//                     }
//                 }
//             </Field>
//             <ErrorMessage name={name} component={TextError}/>
//         </div>
//     );
// };
//
// export default DatePicker;
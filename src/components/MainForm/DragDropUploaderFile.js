import React, {useCallback, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
// import "./Drag&Drop.scss"
import {useTranslation} from "react-i18next";


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const activeStyle = {borderColor: '#2196f3'};

export default function DragDropUploaderFile({setFieldValue, pic, alt, name, title, subtitle}) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    // const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    //
    // // called every time a file's `status` changes
    // const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
    //
    // const handleSubmit = (files, allFiles) => {
    //     console.log(files.map(f => f.meta))
    //     allFiles.forEach(f => f.remove())
    // }

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive,
        fileRejections
    } = useDropzone({
        accept: ".pdf, .doc, .docx",
        maxFiles: 3,
        onDrop: useCallback((acceptedFiles) => {
            console.log(selectedFiles);
            setFieldValue(name, acceptedFiles.map((file) => Object.assign(file, {preview: window.URL.createObjectURL(file)})));
        }, [setFieldValue]),
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
    }), [isDragActive,]);

    const {t} = useTranslation();
    const file = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);

    return (
        <div className="container" name={name}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} name={name}/>
                <div className={"form_drag_drop"}>
                    <img src={pic} alt={alt}
                         className={"form_drag_drop_pic"}/>
                    <span className={"form_drag_drop_pic_description"}>
                        {title} <p className="form_drag_drop_pic_description_colored">{subtitle}</p>
                    </span>
                </div>
            </div>
            <aside>
                {file ? <ul className={"vacancy_form_info"}>{file}</ul> : null}
                <ul className={"form_attachment_info"}>
                    <li>{fileRejections.length > 0
                        ? `${t("mainForm.attachments_errors.link")}`
                        : acceptedFiles.length === 0
                            ? `${t("mainForm.attachments_errors.main")}`
                            : null}
                    </li>
                </ul>
            </aside>
        </div>
    );
}
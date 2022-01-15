import React, {useEffect, useState} from 'react';
import "./Section2.scss";
import {Link} from "react-router-dom";
import {getInfoFromCms} from "../../../../api_requests";
import Loader from "../../../Loader/Loader";
import {useErrorHandler} from "react-error-boundary";



const Section2 = ({locale}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleError = useErrorHandler();
    // const locale = localStorage.getItem("i18nextLng") || "en";

    useEffect(() => {
        getInfoFromCms(`/categories?_locale=${locale}`,setCategories, setError, setLoading)
    },[locale]);

    if (categories.length === 0 || loading) return <Loader/>;
    if (error) return handleError(error);

    const filteredCategories =  categories.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
    return (
        <div className={"main__page__categories__wrapper"}>
            <div className="dark__side" />
            <div className={"main__page__categories__container"}>
                {filteredCategories.length > 0 ? categories.length > 0 && categories.map(item => (
                    // <Link className="category__box" key={item.id} to={{ pathname:`${locale !=="en" ? `/${locale}` : ""}/${item.slug}/`,  state: {title: item.name}}}>
                    <Link className="category__box" key={item.id} to={`${locale !=="en" ? `/${locale}` : ""}${item.category_link}`}>
                        <img src={item.category_picture.url} alt={"alt"} className="category__image"/>
                        <div className="category__info">
                            <p className="cateroty__title">{item.name}</p>
                            <p className="cateroty__description">{item.description}</p>
                        </div>
                    </Link>
                )) : null}
            </div>
        </div>
    );
};

export default Section2;
import React, {useEffect, useState} from 'react';
import {getInfoFromCms} from "../../api_requests";
import {useErrorHandler} from "react-error-boundary";
import Loader from "../../components/Loader/Loader";
import "./Gallery.scss"
import {useTranslation} from "react-i18next";
import axios from "axios";
import {CLAUDINARY_API_KEY, CLAUDINARY_API_SECRET, CLAUDINARY_FETCH_LINK} from "../../env";

// const token = Buffer.from(CLAUDINARY_API_KEY + ":" + CLAUDINARY_API_SECRET).toString(`base64`)

const Gallery = () => {
    console.log("ooooooooooooooo")
    const {t} = useTranslation();
    const locale = localStorage.getItem("i18nextLng") || "ru"
    const [allPhotos, setAllPhotos] = useState([]);
    // const [girls, setGirls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState(0)
    const handleError = useErrorHandler();
    const [postPerPage] = useState(5);

    const toggleTab = (index) => setCurrentTab(index);


    useEffect(() => {
    //     const results =  axios({
    //         method: "get",
    //         url: `${CLAUDINARY_FETCH_LINK}`,
    //         headers: {
    //             Authorization:`Basic ${btoa(CLAUDINARY_API_KEY + ":" + CLAUDINARY_API_SECRET)}`
    //         }
    // }).then((res) => {
    //         console.log(res);
    //     })
        //     .catch(e => {
        //     console.log(e)
        //     return setError(e)
        // })
        if (fetching) {
            getInfoFromCms(`/gallery`, setAllPhotos, setError, setLoading);
            // getInfoFromCms(`/girls`, setGirls, setError, setLoading);
        }
    }, []);
    const all__foto = (allPhotos.girls && allPhotos.interior && allPhotos.kitchen) ? [...allPhotos.interior, ...allPhotos.girls, ...allPhotos.kitchen] : []
    const allTabs = [all__foto, allPhotos.girls, allPhotos.interior, allPhotos.kitchen];
    // useEffect(() => {
    //     document.addEventListener("scroll", scrollHandler);
    //     return () => {
    //         document.removeEventListener("scroll", scrollHandler);
    //     }
    // }, [locale]);

    //Get currentPosts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfLFirstPost = indexOfLastPost - postPerPage;
    const totalPosts = allPhotos.length;
    // const scrollHandler = (e) => {
    //     console.log(e)
    // }
    
    if (loading || allPhotos.length === 0) return <Loader/>
    if (error) handleError(error);
    const currentPosts = all__foto.slice(indexOfLFirstPost, indexOfLastPost);

    console.log(allPhotos);
    return (
        <div className={"gallery__wrapper"}>
            <h1 className={"gallery__main__title"}>{t("gallery.title")}</h1>
            <div className="gallery__tabs">
                {t("gallery__tabs", {returnObjects: true}).map((el, index) => <div
                        className={`gallery__tabs__item ${currentTab === index ? "active" : ""}`}
                        key={index}
                        onClick={() => toggleTab(index)}>
                        {el.tab}
                    </div>
                )}
            </div>
            <img src={`https://princessmensclub.ua` + allPhotos.kitchen[0].image.url} alt="all-photo" className="gallery__item__pic"/>
            {/*{allTabs[currentTab] ? allTabs[currentTab].map(el => {*/}
            {/*    return (*/}
            {/*        <div className={"gallery__container"} key={el.id}>*/}
            {/*            <div className="photo__item">*/}
            {/*                <img src={el.image.url} alt="all-photo" className="gallery__item__pic"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}) : null}*/}
        </div>
    );
};

export default Gallery;
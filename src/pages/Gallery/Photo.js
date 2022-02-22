import React, {useEffect, useState} from 'react';
import {getInfoFromCmsWithoutLoding} from "../../api_requests";
import Loader from "../../components/Loader/Loader";
import {useErrorHandler} from "react-error-boundary";
import {SRLWrapper} from "simple-react-lightbox";
import {girlsArrayPic, girlsArrayPic2, interiorArrayPic, kitchenArrayPic, kitchenArrayPic2} from "../../data/pictures";
import {useTranslation} from "react-i18next";

const options = {
    settings: {
        // overlayColor: "black",
        overlayColor: "rgba(0, 0, 0, 0.95)",
        transitionSpeed: 900,
    },
    buttons: {
        // backgroundColor: "#1b5245",
        iconColor: "#5c62a0",
        // iconColor: "#272C5C",
        // iconColor: "#E89C17",
        backgroundColor: 'transparent',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: 'center',
        // thumbnailsContainerBackgroundColor: 'black',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '0 1px',
        thumbnailsIconColor: 'transparent',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px']
    }
};


const Photo = ({staticPhoto, allStaticPhoto = [], className = '', gallery, interior, girls, kitchen, path}) => {
    const {t} = useTranslation();
    const handleError = useErrorHandler();
    const [fetchedPhotos, setFetchedPhotos] = useState({});
    const [allStaticPhotos, setAllStaticPhotos] = useState(staticPhoto);
    const [girlsPhotos, setGirlsPhotos] = useState({});
    const [interiorPhotos, setInteriorPhotos] = useState({});
    // const [kitchenPhotos, setKitchenPhotos] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [photoPerPage] = useState(10);
    const [showMore, setShowMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    // const { openLightbox, closeLightbox } = useLightbox();

    useEffect(() => {
        if (showMore && currentPage === 2 && !gallery) {
            setAllStaticPhotos([...staticPhoto, ...allStaticPhoto])
            setLoading(true)
            getInfoFromCmsWithoutLoding(`/${path}`, setFetchedPhotos, setError);
            setLoading(false)
        }
        if (gallery) {
            setAllStaticPhotos([...girlsArrayPic, ...girlsArrayPic2, ...interiorArrayPic, ...kitchenArrayPic, ...kitchenArrayPic2])
        }
        if (currentPage === 1 && gallery) {
            setLoading(true)
            getInfoFromCmsWithoutLoding(`/girls`, setGirlsPhotos, setError);
            getInfoFromCmsWithoutLoding(`/interior`, setInteriorPhotos, setError);
            // getInfoFromCmsWithoutLoding(`/gallery`, setKitchenPhotos, setError);
            setLoading(false)
        }
    }, [showMore, currentPage]);


    let allPhotos = girls ? fetchedPhotos.girls : interior ? fetchedPhotos.interior :
        kitchen ? fetchedPhotos.kitchen : gallery ? [girlsPhotos.girls, interiorPhotos.interior].flat(1) : [];

    if (loading) return <Loader/>
    // if (showMore && allPhotos.length === 0) return <Loader/>
    if (error) handleError(error);
    let limitFetchPhoto;
    if (gallery) {
      limitFetchPhoto = allPhotos ? allPhotos.slice(0, (currentPage) * photoPerPage) : [];
    } else {
       limitFetchPhoto = allPhotos ? allPhotos.slice(0, (currentPage - 2) * photoPerPage) : [];
    }

    const handleShomeMore = () => {
        setShowMore(true)
        setCurrentPage(currentPage + 1)
    }

    return (
        <>
            <SRLWrapper options={options}>
                <>
                    <div className={`gallery__photo ${className}`}>
                        {allStaticPhotos.map((el, index) => {
                            return (
                                <div className="photo__item" key={index}>
                                    <img src={el} alt="" className="gallery__item__pic"/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"gallery__photo__fetch__container"}>
                        {(showMore && currentPage >= 2 && allPhotos && allPhotos.length > 0) ? limitFetchPhoto.map(el => {
                            return (
                                <div className="photo__item" key={el.id}>
                                    <img src={kitchen ? el.image.url : el.picture.url} alt=""
                                         className="gallery__item__pic"/>
                                </div>
                            )
                        }) : null}
                    </div>
                </>
            </SRLWrapper>
            {(currentPage > 2 && limitFetchPhoto.length === allPhotos.length && !gallery) ? null : (currentPage < 2 && allStaticPhoto.length === 0 && !gallery) ?
                null : (currentPage > 2 && limitFetchPhoto.length === allPhotos.length && gallery) ? null :
                    <button className="gallery__show__more"
                            onClick={() => handleShomeMore()}>{t("buttons.showMore")}</button>}
        </>
    );
};

export default Photo;
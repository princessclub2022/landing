import React, {useEffect, useState} from "react";
import "./Pagination.scss";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {useTranslation} from "react-i18next";

const Pagination = ({postPerPage, totalPosts, info, currentPage, setCurrentPage, indexOfLastPost}) => {
    const {t} = useTranslation();
    // const totalPages = Math.ceil(totalPosts / 2);
    const totalPages = Math.ceil(totalPosts / postPerPage);


    // create array of  numbers from 1 to 4 (if amount of pages less then 4)
    const fewPages = [];
    for (let i = 1; i <= totalPages; i++) {
        fewPages.push(i);
    }
    const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState(fewPages);

    // create array of  numbers from 1 to totalPages
    const numberOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
        numberOfPages.push(i);
    }




    useEffect(() => {
        let tempNumOfPages = [...arrayOfCurrentButtons];
        const dots = '...'
        const dotsRight = ' ...'
        const dotsLeft = '... '

        if (currentPage >= 1 && currentPage <= 3) {
            tempNumOfPages = [1, 2, 3, 4, dots, numberOfPages.length]
        } else if (currentPage === 4) {
            const sliced = numberOfPages.slice(0, 5);
            tempNumOfPages = [...sliced, dots, numberOfPages.length]
        } else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentPage - 2, currentPage);
            const sliced2 = numberOfPages.slice(currentPage, currentPage + 1);
            tempNumOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        } else if (currentPage > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4);
            tempNumOfPages = ([1, dotsLeft, ...sliced])
        } else if (currentPage === dots) {
            setCurrentPage(arrayOfCurrentButtons[arrayOfCurrentButtons.length - 3] + 1);
        } else if (currentPage === dotsRight) {
            setCurrentPage(arrayOfCurrentButtons[3] + 2);
        } else if (currentPage === dotsLeft) {
            setCurrentPage(arrayOfCurrentButtons[3] - 2);
        }
        setArrayOfCurrentButtons(totalPages > 4 ? tempNumOfPages : fewPages);
        // setArrayOfCurrentButtons(numberOfPages.length <= 4 ? numberOfPages : tempNumOfPages);
    }, [currentPage, totalPages]);



    return (
        <div className={"pagination__wrapper"}>
            {info ? <div className="pagination__info">
                {t("padinationInfo.beforeData")}<span>{indexOfLastPost > totalPosts ? totalPosts : indexOfLastPost}</span>
                {t("padinationInfo.middleData")}<span>{totalPosts}</span>
                {t("padinationInfo.afterData")}
            </div> : null}
            <ul className={"pagination__container"}>
                <li className={`pagination__item previous ${currentPage === 1 ? "disabled" : ""}`}
                    onClick={() => setCurrentPage((prevState) => prevState === 1 ? prevState : prevState - 1)}
                >
                    <MdOutlineKeyboardArrowLeft />
                    <MdOutlineKeyboardArrowLeft />
                </li>
                {arrayOfCurrentButtons.map((page, i) => {
                    return (<li key={i} className={currentPage === page ? " pagination__number active" : "pagination__number"}
                                onClick={() => setCurrentPage(page)}>
                            {page}
                        </li>
                    )
                })}
                <li className={`pagination__item next ${currentPage === numberOfPages.length ? "disabled" : ""}`}
                    onClick={() => setCurrentPage((prevState) => prevState === numberOfPages.length ? prevState : prevState + 1)}
                >
                    <MdOutlineKeyboardArrowRight />
                    <MdOutlineKeyboardArrowRight />
                </li>
            </ul>
        </div>
    );
};

export default Pagination;


// <div>
//     <div>
//         <ul className={"pagination__container"}>
//             <li className={"pagination__item"}>
//                 <div className={`pagination__btn ${currentButton === 1 ? "disabled" : ""}`}
//                      onClick={() => setCurrentButton((prevState) => prevState === 1 ? prevState : prevState - 1)}>Prev
//                 </div>
//             </li>
//             {arrayOfCurrentButtons.map((page, i) => {
//                 return (<li key={i} className={"pagination__item"}>
//                         <div className={currentButton === page ? "active" : "pagination__link"}
//                              onClick={() => setCurrentButton(page)}
//                         >
//                             {page}
//                         </div>
//                     </li>
//                 )
//             })}
//             <li className={"pagination__item"}>
//                 <div className={`pagination__btn ${currentButton === numberOfPages.length ? "disabled" : ""}`}
//                      onClick={() => setCurrentButton((prevState) => prevState === numberOfPages.length ? prevState : prevState + 1)}>Next
//                 </div>
//             </li>
//         </ul>
//     </div>
// </div>
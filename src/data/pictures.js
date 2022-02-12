import allAll1 from "../../src/assets/pictures/MainPage/Можно Все/1.svg"
import allAll2 from "../../src/assets/pictures/MainPage/Можно Все/2.svg"
import allAll3 from "../../src/assets/pictures/MainPage/Можно Все/3.svg"
import allAll4 from "../../src/assets/pictures/MainPage/Можно Все/4.svg"
import allAll5 from "../../src/assets/pictures/MainPage/Можно Все/5.svg"
import allAll6 from "../../src/assets/pictures/MainPage/Можно Все/6.svg"
import allAll7 from "../../src/assets/pictures/MainPage/Можно Все/7.svg"
import allAll8 from "../../src/assets/pictures/MainPage/Можно Все/8.svg"

import allAllAnim1 from "../../src/assets/Icons_princes с анимацией/Спеть Караоке.webp"
import allAllAnim5 from "../../src/assets/Icons_princes с анимацией/Шикарно поужинать.webp"
import allAllAnim6 from "../../src/assets/Icons_princes с анимацией/Пип-show.webp"
import allAllAnim7 from "../../src/assets/Icons_princes с анимацией/Насладиться вкусом.webp"
import allAllAnim8 from "../../src/assets/Icons_princes с анимацией/Общаться с танцовщицами.webp"
import allAllAnim9 from "../../src/assets/pictures/MainPage/Можно Все/5.svg"
import allAllAnim10 from "../../src/assets/Icons_princes с анимацией/Touch-шоу.webp"
import allAllAnim11 from "../../src/assets/Icons_princes с анимацией/Заказать приватный танец.webp"

import siteName1 from "../../src/assets/pictures/MainPage/review/google.svg"
import siteName2 from "../../src/assets/pictures/MainPage/review/zoon.svg"
import siteName3 from "../../src/assets/pictures/MainPage/review/relax.svg"
import siteName4 from "../../src/assets/pictures/MainPage/review/topclub.svg"
import half from "../../src/assets/pictures/MainPage/review/Rating-half.svg"
import full from "../../src/assets/pictures/MainPage/review/Rating-full.svg"
import {reviewsGoogleLink, reviewsRelaxLink, reviewsTOPClubLink, reviewsZoonLink} from "./landing-variables";

/// Main Page
export const allAllow = [
    {
        pic: allAll1,
        picHover: allAllAnim8,
    },
    {
        pic: allAll2,
        picHover: allAllAnim11,
    },
    {
        pic: allAll3,
        picHover: allAllAnim1,
    },
    {
        pic: allAll4,
        picHover: allAllAnim6,
    },
    {
        pic: allAll5,
        picHover: allAllAnim9,
    },
    {
        pic: allAll6,
        picHover: allAllAnim10,
    },
    {
        pic: allAll7,
        picHover: allAllAnim7,
    },
    {
        pic: allAll8,
        picHover: allAllAnim5,
    },
]

export const reviewsAll = [
    {
        image: siteName1,
        stars: half,
        link: reviewsGoogleLink
    },
    {
        image: siteName2,
        stars: half,
        link: reviewsZoonLink
    },
    {
        image: siteName3,
        stars: full,
        link: reviewsRelaxLink
    },
    {
        image: siteName4,
        stars: full,
        link: reviewsTOPClubLink
    },
]
import React, {useEffect} from 'react';
import Section2 from "../../components/Sections/MainPage/Section2/Section2";
import QuestionSection from "../../components/Sections/QuestionSection/QuestionSection";
import ResentArticles from "../../components/Sections/MainPage/ResentArticlesBlock/ResentArticles";

const title = "Do you still need help?"

const MainPage = ({locale}) => {
    // if (document.querySelector(".lang__dropdown")) {
    //     document.querySelector(".lang__dropdown").classList.remove("hide");
    // }
    return (
        <div className={"main__page__container"}>
            <Section2 locale={locale}/>
            <QuestionSection link={"/help-form/"} title={title} classNameButton={"main__page__question"} />
            {/*<ResentArticles />*/}
        </div>
    );
};

export default MainPage;
import React, {useEffect} from 'react';
import Section2 from "../../components/Sections/MainPage/Section2/Section2";
import QuestionSection from "../../components/Sections/QuestionSection/QuestionSection";
import ResentArticles from "../../components/Sections/MainPage/ResentArticlesBlock/ResentArticles";
import MetaDecorator from "../../components/MetaDecorator";

const title = "Do you still need help?"

const MainPage = ({locale}) => {

    useEffect(() => {
        const el = document.querySelector("meta[property='og:title']");
        el.setAttribute('content', "hello" || "kyrrex");
    })

    return (
        <div className={"main__page__container"}>
            <MetaDecorator title={"mainPage"} description={"MainDescription"}/>
            <Section2 locale={locale}/>
            <QuestionSection link={"/help-form/"} title={title} classNameButton={"main__page__question"} />
            {/*<ResentArticles />*/}
        </div>
    );
};

export default MainPage;
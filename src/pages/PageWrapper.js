import React, {useEffect, useState} from 'react';
import SingleCategory from "./SingleCategory/SingleCategory";
import Article from "./Article/Article";
import {useParams} from "react-router-dom";

const PageWrapper = ({locale, singleCategory}) => {
    const {slug} = useParams();
    const page = singleCategory.filter(el => el.category_link === `/${slug}/`);
    return (
        <>
            {page.length > 0 ? <SingleCategory
                locale={locale}
                singleCategory={singleCategory}
            /> : <Article
                locale={locale}
                singleCategory={singleCategory}
            />}
        </>
    );
};

export default PageWrapper;
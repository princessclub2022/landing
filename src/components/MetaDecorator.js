import React from 'react';
import {Helmet} from "react-helmet";

const MetaDecorator = ({title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={"description"} content={description}/>
            {/*<link rel="canonical" href="http://mysite.com/example" />*/}
        </Helmet>
    );
};

export default MetaDecorator;
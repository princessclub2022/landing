import React from 'react';
import {Helmet} from "react-helmet";
// import {Domaine} from "../env";


const MetaDecorator = ({title, description}) => {
    // const picUrl = "https://res.cloudinary.com/kyrrexsupportmain/image/upload/v1643011925/r3uitn0cmjpnfxg1mebj.webp";
    // const location = window.location.pathname;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name={"description"} content={description}/>
            {/*<meta property="og:url" content={`${Domaine}${location}`}  data-react-helmet="true"/>*/}
            {/*<meta property="og:type" content="article" data-react-helmet="true"/>*/}
            {/*<meta property="og:title" content={title} data-react-helmet="true"/>*/}
            {/*<meta property="og:description" content={description} data-react-helmet="true"/>*/}
            {/*<meta property="og:image:url" content={image ? image : picUrl} data-react-helmet="true"/>*/}
            {/*<meta property="og:image:secure_url" content={image ? image : picUrl} data-react-helmet="true"/>*/}
            {/*<meta property="og:site_name" content="Kyrrex" data-react-helmet="true"/>*/}
        </Helmet>
    );
};

export default MetaDecorator;
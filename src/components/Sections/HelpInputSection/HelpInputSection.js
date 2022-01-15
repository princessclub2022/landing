import React from 'react';
import "./HelpInputSection.scss";
import SearchInput from "./SearchInput";

const HelpInputSection = ({locale}) => {
    return (
        <div className={"search__wrapper"}>
            <div className={"search__container"}>
                <h1 className="search__main__title">
                    <p>Welcome</p> to
                    <span className="kyrrex__name">Kyrrex
                        <span> help center</span>
                    </span>
                </h1>
                <SearchInput locale={locale}/>
                {/*<div className="input__search__wrap">*/}
                {/*    <FiSearch className={"input__search__icon"}/>*/}
                {/*    <input type="text" name={"search"} className={"input__search"} placeholder={"How can i help you?"}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default HelpInputSection;
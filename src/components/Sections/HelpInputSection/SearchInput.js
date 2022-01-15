import React, {useEffect, useRef, useState} from 'react';
import {searchOptions} from "../../../data/search";
import {FiSearch} from "react-icons/fi";
import {useTranslation} from "react-i18next";


const SearchInput = ({locale}) => {
    const {t} = useTranslation();
    const [display, setDisplay] = useState(false);
    // const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const options = searchOptions;
    const autoCompleteWrap = useRef(null);

    const handleClickOutSide = (event) => {
        if (autoCompleteWrap.current && !autoCompleteWrap.current.contains(event.target)) {
            setDisplay(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        }
    }, [])

    const searchValue = (value) => {
        setSearch(value);
        setDisplay(false);
    }

    const searchResult = () => options.filter(el => el.title.toUpperCase().includes(search.toUpperCase()));

    return (
        <div className="input__search__wrap" ref={autoCompleteWrap}>
            <FiSearch className={"input__search__icon"}/>
            <input id="auto" className={"input__search"}
                   placeholder={t("inputSearch.placeholder")}
                   onClick={() => setDisplay(true)}
                   // onClick={() => setDisplay(!display)}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            {display && (<div className="input__custom__autocomplite">
                <div className="options__suggestions__outer">
                    {searchResult().length !== 0 ? t("inputSearch.searchInputSuggestions") : t("inputSearch.searchResult")}
                </div>
                    {searchResult().length !== 0 ? <div className="divider"/> : null}
                    <div className="options__suggestions">
                    {searchResult().map(el => {
                        return (
                            <div className="input__custom__option" key={el.id}
                                 onClick={() => searchValue(el.title)}
                            >{el.title}</div>
                        )
                    })}
                </div>
            </div>)}
        </div>
    );
};

export default SearchInput;
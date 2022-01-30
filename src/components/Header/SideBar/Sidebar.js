import React, {useState} from 'react';
import Logo from '../../Logo/logo';
import './Sidebar.scss';
import {slide as Menu} from 'react-burger-menu'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import {useTranslation} from "react-i18next";
import { Link} from 'react-router-dom';

const Sidebar = ({history, pathname, locale}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const closeMenu = () => {setMenuIsOpen(!menuIsOpen);}
    const {t} = useTranslation();
    const [dropDown, setDropDown] = useState(false);
    const [dropDownTwo, setDropDownTwo] = useState(false);
    const onClick = () => setDropDown(!dropDown);
    const onClickTwo = () => setDropDownTwo(!dropDownTwo);
    return (
        <div id="outer-container">
            <Menu
                left
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                width={'360px'}
                // for width burger bars
                burgerBarClassName={"burger__bars token__page"}
                // isOpen={!menuIsOpen}
                // onOpen={closeMenu}
            >
                <div className="sidebar__logo__box">
                    <Logo locale={locale} className={"sidebar__logo"}/>
                </div>
                <ul className="sb__list1__title">
                {/*    <li className="sb__Title drop" onClick={onClick}>*/}
                {/*        <span className='sidebar__item'>*/}
                {/*            {t("menu.product.title")}*/}
                {/*            {!dropDown ? <i className="fas fa-chevron-down sidebar"/> :*/}
                {/*                <i className="fas fa-chevron-down sidebar down"/>}*/}
                {/*            {dropDown ? <ul className="sidebar__list">*/}
                {/*                    {t("menu.product.dropDownMenu", {returnObjects: true}).map((item, index) => {*/}
                {/*                        return (*/}
                {/*                        <li key={index} className={'sbList'}>*/}
                {/*                            { item.navlink ?  <Link to={{pathname: `${lang === "en" ? "" : `/${lang}`}${item.navlink}`}}*/}
                {/*                                         className='menu_item sidebar'*/}
                {/*                                         onClick={() => closeMenu()}*/}
                {/*                                >*/}
                {/*                                    {item.title}*/}
                {/*                                </Link> :*/}
                {/*                                <a href={item.url} className='menu_item sidebar' onClick={() => closeMenu()} target="_blank" rel="noreferrer">*/}
                {/*                                    {item.title}*/}
                {/*                                </a>}*/}
                {/*                            </li>*/}

                {/*                        )*/}
                {/*                    })}*/}
                {/*                </ul> :*/}
                {/*                null}*/}
                {/*     </span>*/}
                {/*    </li>*/}
                {/*    <li className="sb__Title" onClick={closeMenu}>*/}
                {/*        <Link to={{pathname: `${lang === "en" ? "" : `/${lang}`}/institutions/`}} className='sidebar__item'>*/}
                {/*            {t("menu.institutions")}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    {tokenPagePresale ? null : <li className="sb__Title" onClick={closeMenu}>*/}
                {/*        <Link to={{pathname: `${lang === "en" ? "" : `/${lang}`}/token/`}} className='sidebar__item'>*/}
                {/*            {t("menu.token")}*/}
                {/*        </Link>*/}
                {/*    </li>}*/}
                {/*    <li className="sb__Title drop two " onClick={onClickTwo}>*/}
                {/*        <span className='sidebar__item'>*/}
                {/*            {t("menu.company.title")}*/}
                {/*            {!dropDownTwo ? <i className="fas fa-chevron-down sidebar"/> :*/}
                {/*                <i className="fas fa-chevron-down sidebar down"/>}*/}
                {/*            {dropDownTwo ? <ul className="sidebar__list">*/}
                {/*                    {t("menu.company.dropDownMenu", {returnObjects: true}).map((item, index) =>*/}
                {/*                        <li key={index} className={'sbList'} onClick={closeMenu}>*/}
                {/*                            {item.navlink ?*/}
                {/*                            <Link to={{pathname: `${lang === "en" ? "" : `/${lang}`}${item.navlink}`}}*/}
                {/*                                     className='menu_item sidebar'*/}
                {/*                                     onClick={() => closeMenu()}*/}
                {/*                            >*/}
                {/*                                {item.title}*/}
                {/*                            </Link> :  <a href={item.url} className='menu_item sidebar' onClick={() => closeMenu()}*/}
                {/*                                          target="_blank" rel="noreferrer"*/}
                {/*                                >*/}
                {/*                                    {item.title}*/}
                {/*                                </a>*/}
                {/*                            }*/}
                {/*                        </li>*/}
                {/*                    )}*/}
                {/*                </ul> :*/}
                {/*                null}*/}
                {/*     </span>*/}
                {/*    </li>*/}
                {/*    <li className="sb__Title" onClick={closeMenu}>*/}
                {/*        <Link*/}
                {/*            to={{pathname:  `/blog/`}}*/}
                {/*            className='sidebar__item'>*/}
                {/*            {t("menu.news.title")}*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                </ul>
                <LangSwitcher styles="mobile_landing" history={history} pathname={pathname} locale={locale} closeMenu={closeMenu}/>
                {/*<LogInSignUp/>*/}
            </Menu>
        </div>

    )
}
export default Sidebar


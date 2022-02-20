import React, {useState} from 'react';
import Logo from '../../Logo/logo';
import './Sidebar.scss';
import {slide as Menu} from 'react-burger-menu'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import NavBar from "../Navbar/NavBar";
import InfoBox from "../InfoBox";

const Sidebar = ({history, pathname, locale, className, dropDown,showMenu}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
    const closeMenu = () => setMenuIsOpen(!menuIsOpen);
    const closeSideBar = () => setSideBarIsOpen(!sideBarIsOpen);
    return (
        <div id="outer-container">
            <Menu
                left
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                width={'360px'}
                // for width burger bars
                isOpen={sideBarIsOpen}
                onOpen={closeSideBar}
                burgerBarClassName={"burger__bars token__page"}
            >
                <Logo  className={"sidebar__logo"}/>
                <NavBar className={"sidebar__logo"} dropClassName={"sideBar"}
                        closeSideBar={closeSideBar}
                        // dropDown={dropDown}
                        // showMenu={showMenu}
                />
                <InfoBox className={"sideBar__menu"} />
                <LangSwitcher history={history} pathname={pathname} locale={locale}
                              closeMenu={closeMenu} className={"sideBar__menu"} />
            </Menu>
        </div>

    )
}
export default Sidebar


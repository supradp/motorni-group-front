import React, { useState } from "react";
import "./header.scss";

import WhiteLogoIcon from "../../assets/images/icons/white-logo.svg";
import BlackLogoIcon from "../../assets/images/icons/black-logo.svg";
import { Link } from "react-router-dom";
import routes from "../../variables/routes";
import MenuButton from "../buttons/menuButton/MenuButton";

const Header = ({ isMain }) => {
    const headerClas = isMain ? "header header__gradient" : " header header__green";
    const buyBtnClass = isMain
        ? "header__nav-btn header__nav-btn-green btn-animation"
        : "header__nav-btn header__nav-btn-white btn-animation";
    const vacClass = isMain ? "header__nav-btn-extra btn-animation" : "header__nav-btn-green btn-animation";

    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    const hideMenuHandler = () => {
        setIsOpenMobileMenu(false);
    };

    return (
        <div className={headerClas}>
            <div className="header-content-wrapper">
                <div className="header__menu">
                    <MenuButton isOpen={isOpenMobileMenu} setIsOpen={setIsOpenMobileMenu} />

                    <div
                        className={
                            isOpenMobileMenu
                                ? "header__menu-dropdown header__menu-dropdown-active"
                                : "header__menu-dropdown"
                        }
                    >
                        <div className="header__menu-dropdown-links">
                            <Link to={routes.MAIN} onClick={hideMenuHandler}>
                                <img src={BlackLogoIcon} alt="logo" className="header__menu-dropdown-links-logo" />
                            </Link>
                            <Link
                                to={routes.MAIN}
                                className="header__menu-dropdown-links-item btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Головна
                            </Link>
                            <Link
                                to={routes.ABOUTUS}
                                className="header__menu-dropdown-links-item btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Про нас
                            </Link>
                            <Link
                                to={routes.COOPERATION}
                                className="header__menu-dropdown-links-item btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Співпраця
                            </Link>
                            <Link
                                to={routes.NEWS}
                                className="header__menu-dropdown-links-item btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Новини
                            </Link>
                            <Link
                                to={routes.CONTACTS}
                                className="header__menu-dropdown-links-item btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Контакти
                            </Link>
                            <div className="header__menu-dropdown-links-divider"></div>
                            <div
                                className="header__menu-dropdown-links-item header__menu-dropdown-links-item-buy btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Купуй онлайн
                            </div>

                            <Link
                                to={routes.VACANCY}
                                className="header__menu-dropdown-links-item header__menu-dropdown-links-item-vac btn-animation"
                                onClick={hideMenuHandler}
                            >
                                Вакансії
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to={routes.MAIN}>
                    <img src={WhiteLogoIcon} alt="logo" className="header__logo" />
                </Link>
                <div className="header__border"></div>
                <nav className="header__nav">
                    {/* <Link to={routes.MAIN} className="header__nav-btn btn-animation">
                    Головна
                </Link> */}
                    <Link to={routes.ABOUTUS} className="header__nav-btn btn-animation">
                        Про нас
                    </Link>
                    <Link to={routes.COOPERATIONLINK + "dealers"} className="header__nav-btn btn-animation">
                        Співпраця
                    </Link>
                    <Link to={routes.NEWSLINK + "novini-kompaniyi"} className="header__nav-btn btn-animation">
                        Новини
                    </Link>
                    <Link to={routes.CONTACTS} className="header__nav-btn btn-animation">
                        Контакти
                    </Link>
                    <Link to={"https://romb.ua/ua/"} target="_blank" className={buyBtnClass}>
                        Купуй онлайн
                    </Link>
                    <div className="header__nav-divider"></div>
                    <Link to={routes.VACANCYLINK + "marketing"} className={vacClass}>
                        Вакансії
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;

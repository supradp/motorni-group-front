import React from "react";
import "./header.scss";

import WhiteLogoIcon from "../../assets/images/icons/white-logo.svg";

const Header = () => {
    return (
        <div className="header">
            <img src={WhiteLogoIcon} alt="logo" className="header__logo" />
            <div className="header__border"></div>
            <nav className="header__nav">
                <div className="header__nav-btn btn-animation">Головна</div>
                <div className="header__nav-btn btn-animation">Про нас</div>
                <div className="header__nav-btn btn-animation">Співпараця</div>
                <div className="header__nav-btn btn-animation">Новини</div>
                <div className="header__nav-btn btn-animation">Контакти</div>
                <div className="header__nav-btn header__nav-btn-green btn-animation">Купуй онлайн</div>
                <div className="header__nav-divider"></div>
                <div className="header__nav-btn-extra btn-animation">Вакансії</div>
            </nav>
        </div>
    );
};

export default Header;

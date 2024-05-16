import React from "react";
import "./menuButton.scss";
const MenuButton = ({ isOpen, setIsOpen }) => {
    return (
        <div className="menu-btn-wrapper" onClick={() => setIsOpen(!isOpen)}>
            <div className={isOpen ? "menu-btn menu-btn-active" : "menu-btn"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default MenuButton;

import React, { useState } from "react";
import "./sidebarList.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const SidebarList = ({ list, active, setActive }) => {
    return (
        <div className="sidebar-list">
            {list.map((listItem, index) => {
                return (
                    <div className="sidebar-list__item-wrapper" key={index}>
                        {active === listItem.slug && <FaArrowRightLong fill="#009e45" size={10} />}
                        <div
                            key={listItem.id}
                            onClick={() => setActive(listItem.slug)}
                            className={
                                active === listItem.slug
                                    ? "sidebar-list__item btn-animation sidebar-list__item-active"
                                    : "sidebar-list__item btn-animation"
                            }
                        >
                            {listItem.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarList;

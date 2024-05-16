import React, { useState } from "react";
import "./sidebarList.scss";

const SidebarList = ({ list }) => {
    const [active, setActive] = useState(1);
    return (
        <div className="sidebar-list">
            {list.map((listItem) => {
                return (
                    <div
                        key={listItem.id}
                        onClick={() => setActive(listItem.id)}
                        className={
                            active === listItem.id
                                ? "sidebar-list__item btn-animation sidebar-list__item-active"
                                : "sidebar-list__item btn-animation"
                        }
                    >
                        {listItem.title}
                    </div>
                );
            })}
        </div>
    );
};

export default SidebarList;

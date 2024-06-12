import React from "react";
import { Link } from "react-router-dom";
import { GoArrowDown } from "react-icons/go";
import { GoArrowUp } from "react-icons/go";
const BrandsListItem = ({ brand }) => {
    const [isShowMore, setIsShowMore] = React.useState(false);
    return (
        <div className="brands-list__item" key={brand.id}>
            <Link target="_blank" to={brand?.link} className="brands-list__item-name">
                <div className="brands-list__item-name-title">Торгова марка</div>
                <div className="brands-list__item-name-brand">{brand?.title}</div>
            </Link>
            <div className="brands-list__item-desc">
                {isShowMore
                    ? brand?.description
                    : brand?.description?.slice(0, 100) + `${brand?.description?.length > 0 ? "..." : ""}`}
            </div>
            <div className="brands-list__item-bar">
                <div
                    className="brands-list__item-bar-btn btn-animation brand__item-bar-btn-vertical"
                    onClick={() => setIsShowMore(!isShowMore)}
                >
                    {isShowMore ? (
                        <GoArrowUp size={"17px"} fill="#525252" />
                    ) : (
                        <GoArrowDown size={"17px"} fill="#525252" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandsListItem;

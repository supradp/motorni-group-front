import React from "react";
import './directionsSlide.scss';

const DirectionsSlide = ({ title, brands }) => {
    return (
        <div className="directions-slide">
            <div className="directions-slide__title">{title}</div>
            <div className="directions-slide__list">
                {brands.map((brand) => {
                    return (
                        <div className="directions-slide__list-item" key={brand.id}>
                            <img src={brand.image} alt="" className="directions-slide__list-item-img" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DirectionsSlide;

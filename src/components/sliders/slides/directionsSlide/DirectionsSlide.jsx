import React from "react";
import "./directionsSlide.scss";
import { Link } from "react-router-dom";

const DirectionsSlide = ({ brand }) => {
    return (
        <Link to={brand.link} className="directions-slide" key={brand.id}>
            <img src={brand.image} alt="" className="directions-slide-img" />
        </Link>
    );
};

export default DirectionsSlide;

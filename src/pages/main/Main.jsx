import React from "react";
import "./main.scss";
import BannerSlider from "../../components/sliders/BannerSlider.jsx";
import { Helmet } from "react-helmet";
const Main = () => {
    return (
        <div className="main">
            <div className="main__slider">
                <BannerSlider />
            </div>
        </div>
    );
};

export default Main;

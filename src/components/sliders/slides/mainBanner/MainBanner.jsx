import React from "react";
import bannerImg1 from "../../../../assets/images/slider/slider-1.png";
import bannerImg2 from "../../../../assets/images/slider/slider-2.png";
import bannerImg3 from "../../../../assets/images/slider/slider-3.png";
import bannerImg4 from "../../../../assets/images/slider/slider-4.png";
import "./mainBanner.scss";
const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner__img">
                <div className="main-banner__img-title">СХТ</div>
                <img src={bannerImg1} alt="" className="main-banner__img-img" />
            </div>
            <div className="main-banner__img">
                <div className="main-banner__img-title">БТ</div>

                <img src={bannerImg2} alt="" className="main-banner__img-img" />
            </div>
            <div className="main-banner__img">
                <div className="main-banner__img-title">Елек&shy;торо&shy;мобілі</div>

                <img src={bannerImg3} alt="" className="main-banner__img-img" />
            </div>
            <div className="main-banner__img">
                <div className="main-banner__img-title">Вело-мото</div>

                <img src={bannerImg4} alt="" className="main-banner__img-img" />
            </div>
        </div>
    );
};

export default MainBanner;

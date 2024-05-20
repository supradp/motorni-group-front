import "swiper/css";
import "swiper/css/pagination";
import "./bannerSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg from "../../assets/images/slider/banner.png";
import bannerImg2 from "../../assets/images/slider/banner-2.png";
import bannerImg3 from "../../assets/images/slider/banner-3.png";
import bannerImg4 from "../../assets/images/slider/banner-4.png";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import MainBanner from "./slides/mainBanner/MainBanner";
import routes from "../../variables/routes";
import { Link } from "react-router-dom";
import BrandIcon from "../../assets/images/icons/brand-cent.png";
import { useGetPageQuery } from "../../redux/services/motorniAPI";

const list = [
    { id: 1, title: "Нашi напрямки" },
    { id: 2, title: "Сільгосптехніка", link: routes.DIRECTIONSLINK + "1", img: bannerImg },
    { id: 3, title: "Iнструмент та технiка", link: routes.DIRECTIONSLINK + "1", img: bannerImg2 },
    { id: 4, title: "Електромобiлi", link: routes.DIRECTIONSLINK + "1", img: bannerImg3 },
    { id: 5, title: "Вело-мото технiка", link: routes.DIRECTIONSLINK + "1", img: bannerImg4 },
];

const BannerSlider = () => {
    const { data: brands } = useGetPageQuery("brands");

    console.log(brands);

    const sliderRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const getPrevIndexSlideHandler = (activeIbdex) => {
        if (activeIbdex === 0) {
            return list.length - 1;
        } else {
            return activeIbdex - 1;
        }
    };

    const getNextIndexSlideHandler = (activeIbdex) => {
        if (activeIbdex === list.length - 1) {
            return 0;
        } else {
            return activeIbdex + 1;
        }
    };

    return (
        <div className="banner-slider">
            <div className="banner-slider-wrapper">
                <Swiper
                    ref={sliderRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                    loop={true}
                >
                    {list.map((slide) => {
                        return (
                            <SwiperSlide key={slide.id}>
                                {slide.id === 1 ? (
                                    <MainBanner />
                                ) : (
                                    <Link to={slide.link} className="slide">
                                        <div className="slide__brands">
                                            <Link to={""} className="slide__brands-item">
                                                <img src={BrandIcon} alt="" className="slide__brands-item-img" />
                                            </Link>
                                            <Link to={""} className="slide__brands-item">
                                                <img src={BrandIcon} alt="" className="slide__brands-item-img" />
                                            </Link>
                                            <Link to={""} className="slide__brands-item">
                                                <img src={BrandIcon} alt="" className="slide__brands-item-img" />
                                            </Link>
                                        </div>
                                        <img src={slide.img} className="slide-img" />
                                    </Link>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="banner-slider__bar">
                    <div className="banner-slider__bar-border"></div>
                    <div className="banner-slider__bar-btn btn-animation" onClick={handlePrev}>
                        <div className="banner-slider__bar-prev-arrow">
                            <img src={arrowIcon} alt="" className="banner-slider__bar-prev-arrow-icon" />
                        </div>
                        <div className="banner-slider__bar-btn-title">
                            {list[getPrevIndexSlideHandler(activeIndex)]?.title}
                        </div>
                    </div>
                    <Link to={list[activeIndex]?.link} className="banner-slider__bar-title">
                        {list[activeIndex]?.title}
                    </Link>
                    <div className="banner-slider__bar-btn btn-animation" onClick={handleNext}>
                        <div className="banner-slider__bar-btn-title">
                            {list[getNextIndexSlideHandler(activeIndex)]?.title}
                        </div>
                        <div className="banner-slider__bar-next-arrow">
                            <img src={arrowIcon} alt="" className="banner-slider__bar-next-arrow-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;

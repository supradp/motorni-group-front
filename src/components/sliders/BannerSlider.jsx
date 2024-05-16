import "swiper/css";
import "swiper/css/pagination";
import "./bannerSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg from "../../assets/images/slider/banner.png";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import MainBanner from "./slides/mainBanner/MainBanner";

const list = [
    { id: 1, title: "Нашi напрямки" },
    { id: 2, title: "Сільгосптехніка" },
    { id: 3, title: "Iнструмент та технiка" },
    { id: 4, title: "Електромобiлi" },
    { id: 5, title: "Вело-мото технiка" },
];

const BannerSlider = () => {
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
                                    <div className="slide">
                                        <img src={bannerImg} className="slide-img" />
                                    </div>
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
                    <div className="banner-slider__bar-title">{list[activeIndex]?.title}</div>
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

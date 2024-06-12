import "swiper/css";
import "swiper/css/pagination";
import "./newsSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const NewsSlider = ({ slides, children }) => {
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

    return (
        <div className="news-slider">
            <div className="news-slider-wrapper">
                <Swiper
                    ref={sliderRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                    loop={true}
                    style={{ width: "840px" }}
                >
                    {children}
                </Swiper>
                <div className="news-slider__bar">
                    <div className="news-slider__bar-btn btn-animation" onClick={handlePrev}>
                        <GoArrowLeft size={"17px"} fill="#525252" />
                    </div>
                    <div className="news-slider__bar-btn btn-animation" onClick={handleNext}>
                        <GoArrowRight size={"17px"} fill="#525252" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSlider;

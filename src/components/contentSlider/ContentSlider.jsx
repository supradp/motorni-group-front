import "swiper/css";
import "swiper/css/pagination";
import "./contentSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

const ContentSlider = ({ children, isVertical, style, isActiveNav = true, slidesCount = 2 }) => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <div className="content-slider">
            <div className="content-slider-wrapper">
                <Swiper
                    ref={sliderRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    style={style ? style : { width: "900px", height: "450px" }}
                    direction={isVertical ? "vertical" : "horizontal"}
                    autoHeight={true}
                >
                    {children}
                </Swiper>
                <div className="content-slider__bar">
                    {isVertical ? (
                        <div
                            className="content-slider__bar-btn btn-animation content-slider__bar-btn-vertical"
                            onClick={handleNext}
                        >
                            <GoArrowDown size={"17px"} fill="#525252" />
                        </div>
                    ) : (
                        <>
                            {isActiveNav && (
                                <>
                                    <div className="content-slider__bar-btn btn-animation" onClick={handlePrev}>
                                        <GoArrowLeft size={"17px"} fill="#525252" />
                                    </div>
                                    <div className="content-slider__bar-btn btn-animation" onClick={handleNext}>
                                        <GoArrowRight size={"17px"} fill="#525252" />
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;

import "swiper/css";
import "swiper/css/pagination";
import "./contentSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

const list = [
    { id: 1, title: "Нашi напрямки" },
    { id: 2, title: "Сільгосптехніка" },
    { id: 3, title: "Iнструмент та технiка" },
    { id: 4, title: "Електромобiлi" },
    { id: 5, title: "Вело-мото технiка" },
];

const ContentSlider = ({ slides, children, isVertical, style }) => {
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
        <div className="content-slider">
            <div className="content-slider-wrapper">
                <Swiper
                    ref={sliderRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    // onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                    loop={true}
                    style={style ? style : { width: "900px", height: "450px" }}
                    direction={isVertical ? "vertical" : "horizontal"}
                >
                    {slides.map((slide) => {
                        return <SwiperSlide key={slide.id}>{children}</SwiperSlide>;
                    })}
                </Swiper>
                <div className="content-slider__bar">
                    {isVertical ? (
                        <div
                            className="content-slider__bar-btn btn-animation content-slider__bar-btn-vertical"
                            onClick={handlePrev}
                        >
                            <GoArrowDown size={"17px"} fill="#525252" />
                        </div>
                    ) : (
                        <>
                            <div className="content-slider__bar-btn btn-animation" onClick={handlePrev}>
                                <GoArrowLeft size={"17px"} fill="#525252" />
                            </div>
                            <div className="content-slider__bar-btn btn-animation" onClick={handleNext}>
                                <GoArrowRight size={"17px"} fill="#525252" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentSlider;

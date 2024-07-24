import "swiper/css";
import "swiper/css/pagination";
import "./brandsSlider.scss";

import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../../../helpers/useWindowDimensions";

const list = [
    { id: 1, title: "Нашi напрямки" },
    { id: 2, title: "Сільгосптехніка" },
    { id: 3, title: "Iнструмент та технiка" },
    { id: 4, title: "Електромобiлi" },
    { id: 5, title: "Вело-мото технiка" },
];

const BrandsSlider = ({ slides, style }) => {
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

    const { width } = useWindowDimensions();

    const slidesPerView = width < 800 ? 2.5 : slides.length > 5 ? 6 : slides.length;

    return (
        <div className="brands-slider">
            <div className="brands-slider-wrapper">
                {slides.length <= slidesPerView && width > 600 && (
                    <div className="brands-slider__no-scroll-slides">
                        {slides.map((slide) => {
                            return (
                                <Link to={slide?.link} className="brand-slide" target="_blank">
                                    <img src={slide?.image} alt="" className="brand-slide__img" />
                                </Link>
                            );
                        })}
                    </div>
                )}
                {slides.length > slidesPerView && (
                    <Swiper
                        ref={sliderRef}
                        spaceBetween={0}
                        slidesPerView={slidesPerView}
                        // onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                        loop={true}
                        style={style ? style : { width: "900px", height: "450px" }}
                    >
                        {slides.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <Link to={slide?.link} target="_blank" className="brand-slide">
                                        <img src={slide?.image} alt="" className="brand-slide__img" />
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
                <div className="brands-slider__bar">
                    <>
                        {slides.length > slidesPerView && (
                            <>
                                <div className="brands-slider__bar-btn btn-animation" onClick={handlePrev}>
                                    <GoArrowLeft size={"17px"} fill="#525252" />
                                </div>
                                <div className="brands-slider__bar-btn btn-animation" onClick={handleNext}>
                                    <GoArrowRight size={"17px"} fill="#525252" />
                                </div>
                            </>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default BrandsSlider;

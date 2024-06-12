import "swiper/css";
import "swiper/css/pagination";
import "./brandSlider.scss";

import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";

const BrandSlider = ({ brands }) => {
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
        <>
            {brands?.map((slide) => {
                return (
                    <div className="brand-slide" key={slide.id}>
                        <Link target="_blank" to={slide?.link} className="brand-slide__name">
                            <div className="brand-slide__name-title">Торгова марка</div>
                            <div className="brand-slide__name-brand">{slide?.title}</div>
                        </Link>
                        <div className="brand-slide__desc">{slide?.description}</div>
                        <div className="brand-slide__btn">
                            <div
                                className="brand-slider__bar-btn btn-animation brand-slider__bar-btn-vertical"
                                onClick={handlePrev}
                            >
                                <GoArrowDown size={"17px"} fill="#525252" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );

    // return (
    //     <div className="brand-slider">
    //         <div className="brand-slider-wrapper">
    //             <Swiper
    //                 ref={sliderRef}
    //                 spaceBetween={0}
    //                 slidesPerView={"auto"}
    //                 // onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
    //                 loop={true}
    //                 // style={{ height: "200px" }}
    //                 direction={"vertical"}
    //                 autoHeight={true}
    //             >
    //                 {brands.map((slide) => {
    //                     return (
    //                         <SwiperSlide key={slide.id}>
    //                             <div className="brand-slide">
    //                                 <Link target="_blank" to={slide?.link} className="brand-slide__name">
    //                                     <div className="brand-slide__name-title">Торгова марка</div>
    //                                     <div className="brand-slide__name-brand">{slide?.title}</div>
    //                                 </Link>
    //                                 <div className="brand-slide__desc">{slide?.description}</div>
    //                                 <div className="brand-slide__btn">
    //                                     <div
    //                                         className="brand-slider__bar-btn btn-animation brand-slider__bar-btn-vertical"
    //                                         onClick={handlePrev}
    //                                     >
    //                                         <GoArrowDown size={"17px"} fill="#525252" />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </SwiperSlide>
    //                     );
    //                 })}
    //             </Swiper>
    //         </div>
    //     </div>
    // );
};

export default BrandSlider;

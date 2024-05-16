import "swiper/css";
import "swiper/css/pagination";
import "./brandSlider.scss";

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

const BrandSlider = () => {
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
        <div className="brand-slider">
            <div className="brand-slider-wrapper">
                <Swiper
                    ref={sliderRef}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    // onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                    loop={true}
                    // style={{ height: "200px" }}
                    direction={"vertical"}
                    autoHeight={true}
                >
                    {list.map((slide) => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <div className="brand-slide">
                                    <div className="brand-slide__name">
                                        <div className="brand-slide__name-title">Торгова марка</div>
                                        <div className="brand-slide__name-brand">ДТЗ</div>
                                    </div>
                                    <div className="brand-slide__desc">
                                        Бізнес-напрямок представляє найбільший вибір товарів для прибирання у домі та за
                                        його межами, для приготування і зберігання їжі, а також для найрізноманітніших
                                        побутових
                                    </div>
                                    <div className="brand-slide__btn">
                                        <div
                                            className="brand-slider__bar-btn btn-animation brand-slider__bar-btn-vertical"
                                            onClick={handlePrev}
                                        >
                                            <GoArrowDown size={"17px"} fill="#525252" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/* <div className="brand-slider__bar">
                    <div
                        className="brand-slider__bar-btn btn-animation brand-slider__bar-btn-vertical"
                        onClick={handlePrev}
                    >
                        <GoArrowDown size={"17px"} fill="#525252" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default BrandSlider;

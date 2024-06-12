import "swiper/css";
import "swiper/css/pagination";
import "./bannerSlider.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import bannerImg from "../../assets/images/slider/banner.png";
import bannerImg2 from "../../assets/images/slider/banner-2.png";
import bannerImg3 from "../../assets/images/slider/banner-3.png";
import bannerImg4 from "../../assets/images/slider/banner-4.png";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import MainBanner from "./slides/mainBanner/MainBanner";
import routes from "../../variables/routes";
import { Link, useNavigate } from "react-router-dom";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import { Helmet } from "react-helmet";

const list = [
    { id: 1, title: "Нашi напрямки" },
    { id: 2, title: "Сільгосптехніка", link: routes.DIRECTIONSLINK + "1", img: bannerImg },
    { id: 3, title: "Iнструмент та технiка", link: routes.DIRECTIONSLINK + "1", img: bannerImg2 },
    { id: 4, title: "Електромобiлi", link: routes.DIRECTIONSLINK + "1", img: bannerImg3 },
    { id: 5, title: "Вело-мото технiка", link: routes.DIRECTIONSLINK + "1", img: bannerImg4 },
];

const BannerSlider = () => {
    const navigate = useNavigate();

    const [changedDirections, setChangedDirections] = useState([]);
    const [mouseCords, setMousCords] = useState({ x: 0, y: 0 });
    const [isShowDivMouse, setIsShowDivMouse] = useState(true);

    const { data: directions } = useGetPageQuery("directions?relations=*&sort=sort&order=asc");
    const { data: page } = useGetPageQuery("single/home");

    const slidRef = useRef();

    const metaTitle = page?.data?.single?.meta?.meta_title;

    useEffect(() => {
        if (directions?.data && page?.data) {
            setChangedDirections([
                {
                    id: 0,
                    title: page?.data?.single?.content?.directions,
                    titles: directions?.data.map((direction) => direction.title_short),
                    imgs: directions?.data.map((direction) => direction.image_preview),
                    ids: directions?.data.map((direction) => direction.id),
                    slugs: directions?.data.map((direction) => direction.slug),
                },
                ...directions?.data,
            ]);
        }
    }, [directions, page]);

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

    function relativeCoords(e) {
        let bounds = e.target.getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top;
        // setMousCords({ x: x, y: y });
        if (x.toString().length < 8) {
            setMousCords({ x: x, y: y });
        }
    }

    const hideMouseHandler = () => {
        setIsShowDivMouse(true);
    };
    const showMouseHandler = () => {
        setIsShowDivMouse(false);
    };

    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <>
            {directions && page && (
                <div className="banner-slider">
                    <div className="banner-slider-wrapper">
                        <Helmet>
                            <title>{`${metaTitle ? metaTitle : "motorni"}`}</title>
                        </Helmet>

                        <Swiper
                            ref={sliderRef}
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={(slide) => setActiveIndex(slide.realIndex)}
                            loop={true}
                            direction="horizontal"
                            speed={1200}
                        >
                            {changedDirections.map((slide) => {
                                return (
                                    <SwiperSlide key={slide.id}>
                                        {slide.id === 0 ? (
                                            <MainBanner slideData={slide} />
                                        ) : (
                                            <div
                                                // to={routes.DIRECTIONSLINK + slide.id}
                                                className="slide"
                                                key={slide.id}
                                                onClick={() => navigate(routes.DIRECTIONSLINK + slide.slug)}
                                            >
                                                <div
                                                    className="cursor__conteiner"
                                                    ref={slidRef}
                                                    onMouseMove={(e) => relativeCoords(e)}
                                                >
                                                    <div
                                                        className={
                                                            isShowDivMouse
                                                                ? "slide__btn"
                                                                : "slide__btn slide__btn-hidden"
                                                        }
                                                        style={{ left: mouseCords.x + 10, top: mouseCords.y + 10 }}
                                                    >
                                                        Перейти
                                                    </div>
                                                </div>

                                                <div
                                                    className="slide__brands"
                                                    onMouseEnter={showMouseHandler}
                                                    onMouseLeave={hideMouseHandler}
                                                >
                                                    {slide?.brands.map((brand, index) => {
                                                        if (index > 7) {
                                                            return;
                                                        }
                                                        return (
                                                            <Link
                                                                to={brand.link}
                                                                className="slide__brands-item"
                                                                key={brand.id}
                                                                target="_blank"
                                                            >
                                                                <img
                                                                    src={brand?.image}
                                                                    alt=""
                                                                    className="slide__brands-item-img"
                                                                />
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                                <img src={slide?.image_full} className="slide-img" />
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
                                    {changedDirections[getPrevIndexSlideHandler(activeIndex)]?.title}
                                </div>
                            </div>
                            <Link
                                to={
                                    changedDirections[activeIndex]?.id !== 0
                                        ? routes.DIRECTIONSLINK + changedDirections[activeIndex]?.slug
                                        : ""
                                }
                                className="banner-slider__bar-title"
                            >
                                {changedDirections[activeIndex]?.title}
                            </Link>
                            <div className="banner-slider__bar-btn btn-animation" onClick={handleNext}>
                                <div className="banner-slider__bar-btn-title">
                                    {changedDirections[getNextIndexSlideHandler(activeIndex)]?.title}
                                </div>
                                <div className="banner-slider__bar-next-arrow">
                                    <img src={arrowIcon} alt="" className="banner-slider__bar-next-arrow-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BannerSlider;

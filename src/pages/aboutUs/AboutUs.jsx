import React, { useEffect, useRef, useState } from "react";
import "./aboutUs.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import SidebarList from "../../components/sidebarList/SidebarList";
import { GoArrowDown } from "react-icons/go";
import { SwiperSlide } from "swiper/react";
import { useGetPageQuery } from "../../redux/services/motorniAPI";

const list = [
    { id: 1, slug: "1", title: "Керівництво" },
    { id: 2, slug: "2", title: "Історія створення" },
    { id: 3, slug: "3", title: "Місія і стратегія" },
    { id: 4, slug: "4", title: "Цінності" },
    { id: 5, slug: "5", title: "Виробництво" },
    { id: 6, slug: "6", title: "Напрямки" },
    { id: 7, slug: "7", title: "Соціальна відповідальність" },
    { id: 8, slug: "8", title: "Декларація про відповідність" },
];

const Slide = ({ slideData }) => {
    return (
        <div className="about-us__slide">
            <div
                className="about-us__slide-content"
                dangerouslySetInnerHTML={{
                    __html: "<p>Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали.Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду Однак ми не зупиняємось на досягнутому та рухаємось вперед.</p>",
                }}
            />
        </div>
    );
};

const AboutUs = () => {
    const breadCrumbsLinks = [{ title: "Про нас", route: routes.ABOUTUS }];

    const [activeCategory, setActiveCAtegory] = useState("1");
    const [activeCategoryid, setActiveCAtegoryId] = useState(1);

    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        if (containerRef.current) {
            const newScrollPosition = scrollPosition + 390; // Increment scroll position by 400px
            containerRef.current.scrollTo({
                top: newScrollPosition,
                left: 0,
                behavior: "smooth", // Smooth scrolling
            });
            setScrollPosition(newScrollPosition);
        }
    };

    useEffect(() => {
        const handleWheel = (event) => {
            setScrollPosition(0);
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="content-wrapper">
            <div className="about-us">
                <div className="about-us__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="about-us__sidebar-title">Про компанію</div>
                    <div className="about-us__sidebar-list">
                        {<SidebarList list={list} active={activeCategory} setActive={setActiveCAtegory} />}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="about-us__content">
                    <div className="about-us__slide" ref={containerRef}>
                        <div
                            className="about-us__slide-content"
                            dangerouslySetInnerHTML={{
                                __html: "<p>Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали.Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду Однак ми не зупиняємось на досягнутому та рухаємось вперед.</p> <p>Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали.Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду Однак ми не зупиняємось на досягнутому та рухаємось вперед.</p><p>Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали.Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду Однак ми не зупиняємось на досягнутому та рухаємось вперед.</p> <p>Моторні на ринку України вже більше 25 років. Ми змінювались, трансформувались та зростали.Наразі ми маємо три напрямки діяльності, широку сітку дилерів та сервісних центрів, а також потужну та злагоджену команду Однак ми не зупиняємось на досягнутому та рухаємось вперед.</p>",
                            }}
                        />
                    </div>
                    <div className="about-us__content-btn btn-animation" onClick={handleScroll}>
                        <GoArrowDown size={"17px"} fill="#525252" />
                    </div>
                    {/* slide 1 */}
                    {/* <ContentSlider isVertical={true} style={{ height: "450px" }}>
                        {news?.data.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <Slide slideData={slide} />
                                </SwiperSlide>
                            );
                        })}
                    </ContentSlider> */}
                    {/* slide2 */}
                    {/* <ContentSlider slides={slides} isVertical={false} style={{ height: "max-content" }}>
                        <DirectionsSlide
                            brands={brandsList}
                            title={
                                "Бізнес-напрямок представляє найбільший вибір товарів для прибирання у домі та за його межами, для приготування і зберігання їжі, а також для найрізноманітніших побутових потреб."
                            }
                        />
                    </ContentSlider>
                    <BrandSlider /> */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

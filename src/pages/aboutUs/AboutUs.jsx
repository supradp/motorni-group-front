import React, { useEffect, useRef, useState } from "react";
import "./aboutUs.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import SidebarList from "../../components/sidebarList/SidebarList";
import { GoArrowDown } from "react-icons/go";
import { SwiperSlide } from "swiper/react";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import BgIcon from "../../assets/images/BG/bg-icon.svg";
import { Helmet } from "react-helmet";

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

    const { data: aboutUs } = useGetPageQuery("abouts");

    const metaTitle =
        "Про компанію motorni-group | Сільгосптехніка, Інструмент та техніка, Електромобілі, Вело-мототехніка";
    const metaDesc =
        "Дізнайтеся більше про компанію motorni-group - лідера у продажі та обслуговуванні сільгосптехніки, інструменту та техніки, електромобілів та вело-мототехніки в Україні.";

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
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [activeCategory]);

    useEffect(() => {
        const handleWheel = (event) => {
            setScrollPosition(0);
        };

        window.addEventListener("wheel", handleWheel);

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    useEffect(() => {
        if (aboutUs) {
            setActiveCAtegory(aboutUs?.data[0]?.slug);
        }
    }, [aboutUs]);

    return (
        <>
            {aboutUs && (
                <div className="content-wrapper">
                    <div className="about-us">
                        <Helmet>
                            <title>{`${metaTitle ? metaTitle : "motorni"}`}</title>
                            <meta name="description" content={`${metaDesc ? metaDesc : "motorni"}`} />
                        </Helmet>
                        <div className="about-us__sidebar">
                            <BreadCrumbs links={breadCrumbsLinks} />
                            <div className="about-us__sidebar-title">Про компанію</div>
                            <div className="about-us__sidebar-list">
                                {
                                    <SidebarList
                                        list={aboutUs?.data}
                                        active={activeCategory}
                                        setActive={setActiveCAtegory}
                                    />
                                }
                            </div>
                        </div>
                        <div className="divider">
                            <img src={BgIcon} alt="" className="bg-icon" />
                        </div>
                        <div className="about-us__content">
                            <div className="about-us__slide" ref={containerRef}>
                                <div
                                    className="about-us__slide-content"
                                    dangerouslySetInnerHTML={{
                                        __html: aboutUs?.data.find((item) => item.slug === activeCategory)?.content,
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
            )}
        </>
    );
};

export default AboutUs;

import React, { useEffect, useState } from "react";
import "./news.scss";

import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import SidebarList from "../../components/sidebarList/SidebarList";

import { Link, useNavigate, useParams } from "react-router-dom";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import { SwiperSlide } from "swiper/react";
import UserImg from "../../assets/images/user.png";

const list = [
    { id: "novini-kompaniyi", slug: "novini-kompaniyi", title: "Новини компанії" },
    { id: "nashi-cpivrobitniki", slug: "nashi-cpivrobitniki", title: "Нашi cпiвробiтники" },
    { id: "navchalnij-centr-kompaniyi", slug: "navchalnij-centr-kompaniyi", title: "Навчальний центр компанії" },
];

export const Slide = ({ slideData }) => {
    return (
        <Link to={routes.CURRENTNEWSLINK + slideData?.slug} className="news-slide btn-animation">
            <img src={slideData?.image} alt="" className="news-slide__img" />
            <div className="news-slide__title">{slideData?.title}</div>
            <div className="news-slide__txt">
                <div dangerouslySetInnerHTML={{ __html: slideData?.description }} />
            </div>
        </Link>
    );
};

export const UserSlide = ({ slideData }) => {
    return (
        <Link to={routes.CURRENTNEWSLINK + slideData?.slug} className="user-slide btn-animation">
            <div className="user-slide__header">
                <img src={UserImg} alt="" className="user-slide__header-img" />
                <div className="user-slide__header-text">
                    <div dangerouslySetInnerHTML={{ __html: slideData?.content }} />
                </div>
            </div>
            <div className="user-slide__footer">
                <div className="user-slide__footer-name">{slideData?.title}</div>
                <div className="user-slide__footer-position">{slideData?.subtitle}</div>
            </div>
        </Link>
    );
};

const News = () => {
    const breadCrumbsLinks = [{ title: "Новини", route: routes.NEWS }];
    const { id } = useParams();
    const naviagate = useNavigate();

    const [activeCategory, setActiveCAtegory] = useState(id);
    const [activeCategoryid, setActiveCAtegoryId] = useState(1);

    const { data: news } = useGetPageQuery(`news?filters[]=id_news_categories=` + activeCategoryid);
    const { data: categories } = useGetPageQuery("news_categories");

    useEffect(() => {
        // naviagate(routes.NEWSLINK + activeCategory);
        if (categories?.data) {
            setActiveCAtegoryId(categories?.data?.find((cat) => cat.slug === activeCategory)?.id);
        }
    }, [activeCategory, categories]);

    useEffect(() => {
        if (categories) {
            naviagate(routes.NEWSLINK + categories.data[0].slug);
        }
    }, [categories]);

    useEffect(() => {
        setActiveCAtegory(id);
    }, [id]);

    const height = activeCategoryid === 2 ? "450px" : "";

    return (
        <>
            {news && categories && (
                <div className="content-wrapper">
                    <div className="news">
                        <div className="news__sidebar">
                            <BreadCrumbs links={breadCrumbsLinks} />
                            <div className="news__sidebar-title">Новини</div>
                            <div className="cooperation__sidebar-list">
                                {
                                    <SidebarList
                                        list={categories?.data}
                                        active={activeCategory}
                                        setActive={setActiveCAtegory}
                                    />
                                }
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="news__content">
                            <div
                                className="news__content-slider"
                                style={{ paddingTop: activeCategoryid === 2 ? "120px" : "120px" }}
                            >
                                <ContentSlider
                                    style={{ wigth: "max-content", height: height }}
                                    isActiveNav={news?.data.length > 1}
                                    isVertical={activeCategoryid === 2}
                                >
                                    {news?.data.map((slide) => {
                                        if (slide.type === "News") {
                                            return (
                                                <SwiperSlide key={slide.id}>
                                                    <div className="slides-wrapper">
                                                        <Slide slideData={slide} />
                                                        {/* <UserSlide /> */}
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        } else {
                                            return (
                                                <SwiperSlide key={slide.id}>
                                                    <div className="slides-wrapper">
                                                        <UserSlide slideData={slide} />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        }
                                    })}
                                </ContentSlider>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default News;

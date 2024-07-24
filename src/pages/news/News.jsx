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
import BgIcon from "../../assets/images/BG/bg-icon.svg";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import { Helmet } from "react-helmet";
const list = [
    { id: "novini-kompaniyi", slug: "novini-kompaniyi", title: "Новини компанії" },
    { id: "nashi-cpivrobitniki", slug: "nashi-cpivrobitniki", title: "Нашi cпiвробiтники" },
    { id: "navchalnij-centr-kompaniyi", slug: "navchalnij-centr-kompaniyi", title: "Навчальний центр компанії" },
];

export const Slide = ({ slideData }) => {
    return (
        <Link to={routes.CURRENTNEWSLINK + slideData?.slug} className="news-slide btn-animation">
            {slideData?.image.length > 0 && <img src={slideData?.image} alt="" className="news-slide__img" />}
            <div className="news-slide__title">{slideData?.title}</div>
            <div className="news-slide__txt">
                <div dangerouslySetInnerHTML={{ __html: slideData?.description }} />
            </div>
            <div className="news-slide-more btn-animation">Читати далі</div>
        </Link>
    );
};

export const UserSlide = ({ slideData }) => {
    return (
        <Link to={routes.CURRENTNEWSLINK + slideData?.slug} className="user-slide btn-animation">
            <div className="user-slide__header">
                {slideData?.image.length > 0 && (
                    <img src={slideData?.image} alt="" className="user-slide__header-img" />
                )}
                <div className="user-slide__header-text">
                    <div dangerouslySetInnerHTML={{ __html: slideData?.description }} />
                </div>
            </div>
            <div className="user-slide__footer">
                <div className="user-slide__footer-name">{slideData?.title}</div>
                <div className="user-slide__footer-position">{slideData?.subtitle}</div>
                <div className="user-slide__footer-more btn-animation">Читати далі</div>
            </div>
        </Link>
    );
};

const News = () => {
    const breadCrumbsLinks = [{ title: "Новини", route: routes.NEWS }];
    const { id } = useParams();
    const naviagate = useNavigate();
    const { width } = useWindowDimensions();

    const [activeCategory, setActiveCAtegory] = useState(id);
    const [activeCategoryid, setActiveCAtegoryId] = useState(1);

    const { data: news } = useGetPageQuery(`news?filters[]=id_news_categories=` + activeCategoryid);
    const { data: categories } = useGetPageQuery("news_categories");

    const metaTitle = "Новини компанії | motorni-group";
    const metaDesc =
        'description" content="Будьте в курсі останніх новин та подій компанії motorni-group. Дізнайтеся про нові продукти, партнерства та досягнення в сфері сільгосптехніки, інструменту та техніки, електромобілів та вело-мототехніки.';

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

    // const height = activeCategoryid === 2 ? "450px" : "";

    return (
        <>
            {news && categories && (
                <div className="content-wrapper">
                    <div className="news">
                        <Helmet>
                            <title>{`${metaTitle ? metaTitle : "motorni"}`}</title>
                            <meta name="description" content={`${metaDesc ? metaDesc : "motorni"}`} />
                        </Helmet>
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
                        <div className="divider">
                            <img src={BgIcon} alt="" className="bg-icon" />
                        </div>
                        <div className="news__content">
                            <div
                                className="news__content-slider"
                                // style={{ paddingTop: activeCategoryid === 2 ? "115px" : "115px" }}
                            >
                                <ContentSlider
                                    style={{ wigth: "max-content", height: "max-content" }}
                                    isActiveNav={news?.data.length > 1}
                                    // isVertical={activeCategoryid === 2 && width > 1330 ? true : false}
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

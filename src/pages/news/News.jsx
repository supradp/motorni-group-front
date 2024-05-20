import React from "react";
import "./news.scss";

import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import SidebarList from "../../components/sidebarList/SidebarList";
import NewsSlider from "../../components/sliders/newsSlider/NewsSlider";

import NewsSlideImg from "../../assets/images/slider/news-slide.png";
import { Link } from "react-router-dom";
import ContentSlider from "../../components/contentSlider/ContentSlider";
import useWindowDimensions from "../../helpers/useWindowDimensions";

const list = [
    { id: 1, title: "Стати дилером" },
    { id: 2, title: "Стати співробітником" },
];

const Slide = ({ text }) => {
    return (
        <Link to={routes.NEWS + "/1"} className="news-slide btn-animation">
            <img src={NewsSlideImg} alt="" className="news-slide__img" />
            <div className="news-slide__title">Вiдкриття автосалону</div>
            <div className="news-slide__txt">
                12 квітня у Дніпрі відбулося урочисте відкриття нового автосалону компанії МОТОРНІ, що стало яскравою
                подією для всіх любителів автомобілів. Гості заходу змогли оцінити широкий асортимент представлених
                марок та моделей, а також взяти участь у захоплюючих тест-драйвах. В рамках ...
            </div>
        </Link>
    );
};

const slides = [
    { id: 1, slide: <Slide /> },
    { id: 2, slide: <Slide /> },
    { id: 3, slide: <Slide /> },
];

const News = () => {
    const { width } = useWindowDimensions();

    const breadCrumbsLinks = [{ title: "Новини", route: routes.NEWS }];
    return (
        <div className="content-wrapper">
            <div className="news">
                <div className="news__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="news__sidebar-title">Новини</div>
                    <div className="news__sidebar-list">{<SidebarList list={list} />}</div>
                </div>
                <div className="news__content">
                    {width < 1080 ? (
                        <ContentSlider slides={slides} style={{ wigth: "max-content" }}>
                            <Slide />
                        </ContentSlider>
                    ) : (
                        <>
                            {" "}
                            <div className="news__content-slider news__content-slider-first">
                                <NewsSlider slides={slides}>
                                    <Slide />
                                </NewsSlider>
                            </div>
                            {/* <div className="news__content-divider"></div> */}
                            <div className="news__content-slider news__content-slider-second">
                                <NewsSlider slides={slides}>
                                    <Slide />
                                </NewsSlider>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;

import React, { useEffect, useState } from "react";
import "./currentNews.scss";
import NewsSlideImg from "../../assets/images/slider/news-slide.png";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import routes from "../../variables/routes";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from "moment";

const CurrentNews = () => {
    const [breadCrumbsLinks, setBreadCrumbsLinks] = useState([
        { title: "Новини", route: routes.NEWS },
        { title: "вiдкриття автосалону", route: routes.NEWS },
    ]);

    const { id } = useParams();

    const { data: news } = useGetPageQuery(`news/${id}`);

    useEffect(() => {
        if (news) {
            setBreadCrumbsLinks((prew) => [prew[0], { title: news?.title, route: routes.NEWS }]);
        }
    }, [news]);

    return (
        <>
            {news && (
                <div className="content-wrapper">
                    <Helmet>
                        <title>{`${news?.meta_title ? news?.meta_title : "motorni"}`}</title>
                    </Helmet>
                    <div className="current-news">
                        <BreadCrumbs links={breadCrumbsLinks} />

                        <div className="current-news__title">Новини</div>
                        <div className="current-news__content">
                            <img src={news?.image} alt="" className="current-news__content-img" />
                            <div className="current-news__content-text">
                                <div className="current-news__content-text-date">
                                    {moment(news?.created_at).format("DD-MM-YYYY")}
                                </div>
                                <div className="current-news__content-text-title">{news.title}</div>
                                {news?.subtitle && (
                                    <div className="current-news__content-text-subtitle">{news?.subtitle}</div>
                                )}
                                <div className="current-news__content-text-txt">
                                    <div dangerouslySetInnerHTML={{ __html: news?.content }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CurrentNews;

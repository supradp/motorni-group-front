import moment from "moment";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import routes from "../../variables/routes";
import "./currentNews.scss";

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
                        <meta name="description" content={`${news?.meta_description ? news?.meta_description : "motorni"}`} />
                    </Helmet>
                    <div className="current-news">
                        <BreadCrumbs links={breadCrumbsLinks} />

                        <div className="current-news__title">Новини</div>
                        <div className="current-news__content">
                            {news?.image.length > 0 && (
                                <img src={news?.image} alt="" className="current-news__content-img" />
                            )}
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

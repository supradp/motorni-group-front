import React from "react";
import "./currentNews.scss";
import NewsSlideImg from "../../assets/images/slider/news-slide.png";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import routes from "../../variables/routes";

const CurrentNews = () => {
    const breadCrumbsLinks = [
        { title: "Новини", route: routes.NEWS },
        { title: "вiдкриття автосалону", route: routes.NEWS },
    ];

    return (
        <div className="content-wrapper">
            <div className="current-news">
                <BreadCrumbs links={breadCrumbsLinks} />

                <div className="current-news__title">Новини</div>
                <div className="current-news__content">
                    <img src={NewsSlideImg} alt="" className="current-news__content-img" />
                    <div className="current-news__content-text">
                        <div className="current-news__content-text-date">08.05.2024</div>
                        <div className="current-news__content-text-title">Вiдкриття автосалону</div>
                        <div className="current-news__content-text-txt">
                            12 квітня у Дніпрі відбулося урочисте відкриття нового автосалону компанії МОТОРНІ, що стало
                            яскравою подією для всіх любителів автомобілів. Гості заходу змогли оцінити широкий
                            асортимент представлених марок та моделей, а також взяти участь у захоплюючих тест-драйвах.
                            В рамках ... <br />
                            <br />
                            12 квітня у Дніпрі відбулося урочисте відкриття нового автосалону компанії МОТОРНІ, що
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentNews;

import React, { useEffect, useState } from "react";
import "./vacancy.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import VacancyItem from "../../components/vacancy/vacancyItem/VacancyItem";
import { useGetPageQuery } from "../../redux/services/motorniAPI";
import BgIcon from "../../assets/images/BG/bg-icon.svg";
import { Helmet } from "react-helmet";

const Slide = ({ slides }) => {
    return (
        <div className="contact-slide">
            {slides.map((slide, index) => {
                return <VacancyItem key={index} slideData={slide} />;
            })}
        </div>
    );
};

const Vacancy = () => {
    const breadCrumbsLinks = [{ title: "Вакансії", route: routes.VACANCY }];

    const { data: page } = useGetPageQuery(`single/vacancies`);

    const metaTitle = "Вакансії | motorni-group";
    const metaDesc =
        "Приєднуйтеся до команди motorni-group! Ознайомтеся з нашими актуальними вакансіями та станьте частиною лідера в сфері сільгосптехніки, інструменту та техніки, електромобілів та вело-мототехніки.";

    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://www.work.ua/export/company/get_jobs_list.js?v=2";
        script.async = true;

        document.body.appendChild(script);

        console.log("mounted");
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <div className="content-wrapper">
                <Helmet>
                    <title>{`${metaTitle ? metaTitle : "motorni"}`}</title>
                    <meta name="description" content={`${metaDesc ? metaDesc : "motorni"}`} />
                </Helmet>
                <div className="vacancy">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    {/* <div className="vacancy__title">Актуальні вакансії</div> */}
                    <div className="vacanc-list">
                        <h2>Актуальні вакансії компанії:</h2>
                        <ul id="work-jobs-list" data-id="216798" data-lang="ua"></ul>
                        <p>
                            <a href="https://www.work.ua/jobs/by-company/216798/#open-jobs" target="_blank">
                                Усі вакансії компанії «АМТ»
                            </a>{" "}
                            на{" "}
                            <a href="https://www.work.ua/" target="_blank">
                                Work.ua
                            </a>
                        </p>
                        {/* <img src={BgIcon} alt="" className="bg-icon" /> */}
                    </div>
                    {/* <div className="vacancy__sidebar">
                            <BreadCrumbs links={breadCrumbsLinks} />
                            <div className="vacancy__sidebar-title">Вакансії</div>
                            <div className="vacancy__sidebar-list">
                                <SidebarList
                                    list={categories?.data}
                                    active={activeCategory}
                                    setActive={setActiveCategory}
                                />
                            </div>
                        </div> */}
                    {/* <div className="vacancy__content">
                            <ContentSlider
                                style={{ height: "max-content" }}
                                isActiveNav={sliderContactsList.length > 1}
                            >
                                {sliderContactsList.map((slides, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Slide slides={slides} />
                                        </SwiperSlide>
                                    );
                                })}
                            </ContentSlider>
                        </div> */}
                </div>
            </div>
        </>
    );
};

export default Vacancy;

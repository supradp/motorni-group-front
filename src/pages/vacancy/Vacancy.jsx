import React from "react";
import "./vacancy.scss";
import routes from "../../variables/routes";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import VacancyItem from "../../components/vacancy/vacancyItem/VacancyItem";
import SidebarList from "../../components/sidebarList/SidebarList";

const list = [
    { id: 1, title: "Водій-експедитор" },
    { id: 2, title: "Промоутер" },
    { id: 3, title: "Аналітик iз продажу" },
    { id: 4, title: "Керівник категорійних " },
    { id: 5, title: " Помічник бухгалтера" },
];

const Vacancy = () => {
    const breadCrumbsLinks = [{ title: "Вакансії", route: routes.VACANCY }];
    return (
        <div className="content-wrapper">
            <div className="vacancy">
                <div className="vacancy__sidebar">
                    <BreadCrumbs links={breadCrumbsLinks} />
                    <div className="vacancy__sidebar-title">Вакансії</div>
                    <div className="vacancy__sidebar-list">
                        <SidebarList list={list} />
                    </div>
                </div>
                <div className="vacancy__content">
                    <VacancyItem />
                    <VacancyItem />
                    <VacancyItem />
                </div>
            </div>
        </div>
    );
};

export default Vacancy;

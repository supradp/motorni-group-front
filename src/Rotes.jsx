import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import routes from "./variables/routes.js";
import Vacancy from "./pages/vacancy/Vacancy.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Cooperation from "./pages/сooperation/Cooperation.jsx";
import News from "./pages/news/News.jsx";
import CurrentNews from "./pages/currentNews/CurrentNews.jsx";
import Directions from "./pages/directions/Directions.jsx";

const Rotes = () => {
    return (
        <Routes>
            <Route exact path="*" element={<NotFound />} />
            <Route exact path={routes.MAIN} element={<Main />} />
            <Route exact path={routes.VACANCY} element={<Vacancy />} />
            <Route exact path={routes.ABOUTUS} element={<AboutUs />} />
            <Route exact path={routes.CONTACTS} element={<Contacts />} />
            <Route exact path={routes.COOPERATION} element={<Cooperation />} />
            <Route exact path={routes.NEWS} element={<News />} />
            <Route exact path={routes.CURRENTNEWS} element={<CurrentNews />} />
            <Route exact path={routes.CURRENTNEWS} element={<CurrentNews />} />
            <Route exact path={routes.DIRECTIONS} element={<Directions />} />
        </Routes>
    );
};

export default Rotes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import NotFound from "./pages/NotFound.jsx";
import routes from "./variables/routes.js";

const Rotes = () => {
    return (
        <Routes>
            <Route exact path="*" element={<NotFound />} />
            <Route exact path={routes.MAIN} element={<Main />} />
        </Routes>
    );
};

export default Rotes;

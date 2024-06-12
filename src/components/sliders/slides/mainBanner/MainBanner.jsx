import React from "react";
import "./mainBanner.scss";
import { Link } from "react-router-dom";
import routes from "../../../../variables/routes";
const MainBanner = ({ slideData }) => {
    return (
        <>
            {slideData && (
                <div className="main-banner">
                    {slideData.ids.map((slideId, index) => {
                        return (
                            <Link
                                to={routes.DIRECTIONSLINK + slideData.slugs[index]}
                                className="main-banner__img "
                                key={slideId}
                            >
                                <div
                                    className={
                                        slideData.titles[index].includes("-")
                                            ? "main-banner__img-title"
                                            : "main-banner__img-title main-banner__img-title-break"
                                    }
                                >
                                    {slideData.titles[index]}
                                </div>
                                <img src={slideData?.imgs[index]} alt="" className="main-banner__img-img" />
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default MainBanner;

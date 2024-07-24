import React from "react";
import "./mainBanner.scss";
import { Link } from "react-router-dom";
import routes from "../../../../variables/routes";
import useWindowDimensions from "../../../../helpers/useWindowDimensions.js";
import { addWordBreaks } from "../../../../helpers/addWordBreaks.js";
const MainBanner = ({ slideData }) => {
    const { width } = useWindowDimensions();

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
                                    {width > 1000 ? slideData.titles[index] : addWordBreaks(slideData.titles[index], 7)}
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

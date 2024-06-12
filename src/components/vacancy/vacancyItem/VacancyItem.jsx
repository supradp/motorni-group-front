import React from "react";
import "./vacancyItem.scss";
import { Link } from "react-router-dom";

const VacancyItem = ({ slideData }) => {
    return (
        <div className="vacancy-item">
            <div className="vacancy-item__title">{slideData?.title}</div>
            <div className="vacancy-item__desc">
                <div className="vacancy-item__desc-txt">
                    {slideData?.text}{" "}
                    <span className="btn-animation">
                        <Link to={slideData?.link} target="_blank">
                            Дізнатись більше
                        </Link>
                    </span>
                </div>
                <div className="vacancy-item__desc-salary">{slideData?.price}</div>
            </div>
        </div>
    );
};

export default VacancyItem;

import React from "react";
import "./breadCrumbs.scss";
import { Link, useLocation } from "react-router-dom";
import routes from "../../variables/routes";

const BreadCrumbs = ({ links }) => {
    const { pathname } = useLocation();
    return (
        <div className="bread-crumbs">
            <Link to={routes.MAIN} className="bread-crumbs__link btn-animation">
                Головна
            </Link>
            {"/"}
            {links?.length > 0 &&
                links.map((link, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Link
                                to={index !== links.length - 1 ? link.route : undefined}
                                className={
                                    index === links.length - 1
                                        ? "bread-crumbs__link bread-crumbs__link-last "
                                        : "bread-crumbs__link btn-animation"
                                }
                            >
                                {link.title}
                            </Link>
                            {index !== links.length - 1 && "/"}
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default BreadCrumbs;

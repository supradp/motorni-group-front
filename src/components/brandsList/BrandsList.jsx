import "./brandsList.scss";

import React from "react";

import { Link } from "react-router-dom";
import BrandsListItem from "./BrandsListItem";

const BrandsList = ({ brands }) => {
    return (
        <div className="brands-list">
            {brands?.map((brand) => {
                return <BrandsListItem key={brand.id} brand={brand} />;
            })}
        </div>
    );
};

export default BrandsList;

import React from "react";
import { Link } from "react-router-dom";
import "./contactItem.scss";

const ContactItem = ({ slideData }) => {
    return (
        <div className="contact-item">
            <div className="contact-item__left">
                <Link to={slideData?.google_map} target="_blank" className="contact-item__title btn-animation">{slideData?.title}</Link>
                <div className="contact-item__desc">
                    <div className="contact-item__desc-txt">{slideData?.content}</div>
                </div>
            </div>
            <div className="contact-item__gight">
                <Link to={slideData?.google_map} target="_blank" className="contact-item__city btn-animation">{slideData?.city}</Link>
                <Link to={slideData?.google_map} target="_blank" className="contact-item__street btn-animation">{slideData?.address}</Link>
                <div className="contact-item__time">
                    {" "}
                    {slideData?.time.split("|").map((time) => (
                        <div>{time}</div>
                    ))}
                </div>
                <div className="contact-item__phone">
                    {slideData?.phone.split("|").map((phone) => (
                        <div>{phone}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactItem;

import React from "react";
import "./contactItem.scss";

const ContactItem = ({ slideData }) => {
    return (
        <div className="contact-item">
            <div className="contact-item__left">
                <div className="contact-item__title">{slideData?.title}</div>
                <div className="contact-item__desc">
                    <div className="contact-item__desc-txt">{slideData?.content}</div>
                </div>
            </div>
            <div className="contact-item__gight">
                <div className="contact-item__city">{slideData?.city}</div>
                <div className="contact-item__street">{slideData?.address}</div>
                <div className="contact-item__time">{slideData?.time}</div>
                <div className="contact-item__phone">{slideData?.phone}</div>
            </div>
        </div>
    );
};

export default ContactItem;

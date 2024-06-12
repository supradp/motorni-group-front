import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-content-wrapper">
                <div className="footer__rights">
                    <div className="footer__rights-title">© 1999-2024 Motorni group. </div>
                    <div className="footer__rights-title">Всі права захищено.</div>
                </div>
                <div className="footer__socials">
                    <div className="footer__socials-item btn-animation">
                        <FaFacebookF color="white" size={25} />
                    </div>
                    <div className="footer__socials-item btn-animation">
                        <FaInstagram color="white" size={25} />
                    </div>
                    <div className="footer__socials-item btn-animation">
                        <FaYoutube color="white" size={25} />
                    </div>
                    <div className="footer__socials-item btn-animation">
                        <FaTiktok color="white" size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;

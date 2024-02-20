import React from 'react';
import './Footer.css'
import Footer_logo from "../Assets/logo_big.png"
import instagram_icon from '../Assets/instagram_icon.png'
import pintest_icon from "../Assets/pintester_icon.png"
import whastapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={Footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintest_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whastapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyRight">
                <hr />
                <p>CopyRight @ 2024 - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import footerLogo from '../../images/footer-logo.png'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer_top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                <div className="footer_logo">
                                    <Nav.Link href="#home">
                                        <img src={footerLogo} alt=""/>
                                    </Nav.Link>
                                </div>
                                <h6>
                                    HIW (Health is Wealth), Virtual HealthCare Platform for all.
                                </h6>
                                <div className="social_links">
                                    <ul>
                                        <li>
                                            <Nav.Link href="#">
                                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                                            </Nav.Link>
                                        </li>
                                        <li>
                                            <Nav.Link href="#">
                                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                                            </Nav.Link>
                                        </li>
                                        <li>
                                            <Nav.Link href="#">
                                                <FontAwesomeIcon icon={faInstagram} size="2x"/>                              
                                            </Nav.Link>
                                        </li>
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                        Departments
                                </h3>
                                <ul>
                                    <li><Nav.Link href="#">Eye Care</Nav.Link></li>
                                    <li><Nav.Link href="#">Skin Care</Nav.Link></li>
                                    <li><Nav.Link href="#">Diagnostic</Nav.Link></li>
                                    <li><Nav.Link href="#">Medicine</Nav.Link></li>
                                    <li><Nav.Link href="#">Dental</Nav.Link></li>
                                </ul>
    
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                        Useful Links
                                </h3>
                                <ul>
                                    <li><Nav.Link href="#">About</Nav.Link></li>
                                    <li><Nav.Link href="#"> Contact</Nav.Link></li>
                                    <li><Nav.Link href="#"> Appointment</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                        Address
                                </h3>
                                <p>
                                    Mohammadpur, Dhaka, Bangladesh
                                    +8801914149553,
                                    hiw.bd@info.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | HIW <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://HIW.com" target="blank">HIW</a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
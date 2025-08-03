import { SlSocialFacebook } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import "./index.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <h3>Services</h3>
                    <ul className="services-list">
                        <li>Book doctor appointment</li>
                        <li>Book lab tests</li>
                    </ul>
                </div>
                <div className="quick-links-container">
                    <h3>Quick Links</h3>
                    <ul className="quick-links-list">
                        <li>Home</li>
                        <li>Consule Us</li>
                        <li>Book Lab Tests</li>
                        <li>About Us</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="locations-container">
                    <h3>Locations</h3>
                    <ul className="locations-list">
                        <li>Hyderabad</li>
                        <li>Mumbai</li>
                        <li>Chennai</li>
                        <li>Jaipur</li>
                        <li>Bengaluru</li>
                    </ul>
                </div>
                <div className="contact-container">
                    <h3>Contact Us</h3>
                    <ul className="contacts">
                        <li>Email: information@health.com</li>
                        <li>Phone: +91 9876543210</li>
                    </ul>
                    <div>
                        <SlSocialFacebook className="social-icon" />
                        <SlSocialInstagram className="social-icon" />
                        <FaXTwitter className="social-icon" />
                        <FaLinkedin className="social-icon" />
                    </div>
                </div>
            </div>

            <hr />
            <div className="copyright-container">
                <FaRegCopyright className="copyright-icon" />
                <p>Copyright 2025 | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
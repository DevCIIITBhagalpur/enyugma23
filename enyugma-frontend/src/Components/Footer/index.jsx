import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/logo.png";
import "./footer.scss";
import { gallery } from "../Gallery/list.js";
import { Link } from "react-router-dom";

const Footer = () => {
    const galleryImages = gallery.slice(0, 4);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo} alt="loading..." className="logoImage" />
                    <p>Indian Institute Of Information Technology, Bhagalpur</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="icon">
                        <p>
                            {" "}
                            <HomeIcon />
                            <Link to="/"> &nbsp;Home</Link>
                        </p>
                    </div>
                    <div className="icon">
                        <p>
                            {" "}
                            <EmailIcon />
                            <Link to="/">&nbsp; Mail Us</Link>
                        </p>
                    </div>
                    <div className="icon">
                        <p>
                            {" "}
                            <InstagramIcon />
                            <Link
                                to="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                &nbsp; Instagram
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Enyugma'22 Results</h3>
                    <br />
                    <div className="icon">
                        <p>
                            <Link
                                className="icon"
                                href="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                Technical Event Result
                            </Link>
                        </p>
                    </div>
                    <br />
                    <div className="icon">
                        <p>
                            <Link
                                className="icon"
                                href="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                Cultural Event Result
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="image-overlay" onClick={handleCloseImage}>
                    <div className="image-overlay-content">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="overlay-image"
                        />
                    </div>
                </div>
            )}
            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} IIITBH.All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

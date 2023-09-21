import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "../../assets/logo.png";
import IIItbLogo from "../../assets/iiitbh.png"
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
        <div className="footer-section footer-center">
          <img src={logo} alt="loading..." className="logoImage" />
          <p>Indian Institute Of Information Technology, Bhagalpur</p>
        </div>
        <div className="footer-section footer-icons">
          <h3>Quick Links</h3>
          <div className="icons">
          <div className="icon">
            <Link to="/" className="link">
              <HomeIcon className="icon-class"/>
            </Link>
          </div>
          <div className="icon">
            <Link to="/" className="link">
              <EmailIcon className="icon-class"/>
            </Link>
          </div>
          <div className="icon">
            <Link
              className="link"
              to="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <InstagramIcon className="icon-class"/>
            </Link>
          </div>
          <div className="icon">
            <Link
              className="link"
              to="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <YouTubeIcon className="icon-class" />
            </Link>
          </div>
          <div className="icon">
            <Link
              className="link"
              to="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <FacebookIcon className="icon-class" />
            </Link>
          </div>
          </div>
        </div>
     
         <div className="footer-section ">
            <img src={IIItbLogo} alt="" />
          <button className="OurTeamBtn">Our Team</button>
          
        </div>
      </div>
      {selectedImage && (
        <div className="image-overlay" onClick={handleCloseImage}>
          <div className="image-overlay-content">
            <img src={selectedImage} alt="Selected" className="overlay-image" />
          </div>
        </div>
      )}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} IIITBH.All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

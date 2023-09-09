import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../assets/logo.png";
import './footer.scss';
import { gallery } from '../Gallery/list.js';

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
        <img src= {logo} alt ="loading..."     className="logoImage" />
          <p>Indian Institute Of Information Technology, Bhagalpur</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className='icon'>
          <p> <HomeIcon/><a href="/#" target="blank"> &nbsp;Home</a></p>
          </div>
          <div className='icon'>
          <p> <EmailIcon/><a href="/#" target="blank">&nbsp; Mail Us</a></p>
          </div>
          <div className='icon'>
          <p> <InstagramIcon/><a href="https://instagram.com/enyugma_iiitbh?igshid=MzRlODBiNWFlZA==" target="blank">&nbsp; Instagram</a></p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Glimpse of Enyugma'22</h3>
          <div className="image-gallery">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="image-overlay" onClick={handleCloseImage}>
          <div className="image-overlay-content">
            <img src={selectedImage} alt="Selected" className="overlay-image"  />
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

import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../assets/logo.png";
import './footer.scss';

const Footer = () => {
  const galleryImages = [
    'https://i.ytimg.com/vi/-8na-RtbgVs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA13FCWoXXPNiuVcFGUW2plKOZVuw',
   
    'https://i.ytimg.com/vi/6dnvfhZs-FY/maxresdefault.jpg',
    'https://media.licdn.com/dms/image/C4D22AQFhBePtF9ZhGA/feedshare-shrink_800/0/1671352488923?e=1692230400&v=beta&t=NWYMAbWU-2c4qtTQaMkJiKf4wteIlGy5KvdMsSS-rS0',
    'https://media.licdn.com/dms/image/C4D22AQHIXGTAQSki7A/feedshare-shrink_800/0/1671352310254?e=1692230400&v=beta&t=l_MaPdf_2udvpAdHvv7dZjFmTs-tgzx49OoTSAn_0AA',
    'https://media.licdn.com/dms/image/C4D22AQGxo-QPWcsw4Q/feedshare-shrink_800/0/1671351670582?e=1692230400&v=beta&t=xkU7YPVuu5rql8b1qEL8latEqRYWjMtDeQQx3aJZW5M',
    'https://media.licdn.com/dms/image/C4D22AQGSzJjA1JRqTQ/feedshare-shrink_800/0/1671352309771?e=1691625600&v=beta&t=81BTZhs67EXdgnb_7-AipGrg0A_YBfGrSt4RVM-Jn0A',
  ];

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

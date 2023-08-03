import { React, useEffect } from "react";
import "./gallery.scss";
import { useState } from "react";

const Gallery = () => {
    const [images,setImages]=useState([
        "https://i.ytimg.com/vi/-8na-RtbgVs/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA13FCWoXXPNiuVcFGUW2plKOZVuw",

        "https://i.ytimg.com/vi/6dnvfhZs-FY/maxresdefault.jpg",
        "https://media.licdn.com/dms/image/C4D22AQFhBePtF9ZhGA/feedshare-shrink_800/0/1671352488923?e=1692230400&v=beta&t=NWYMAbWU-2c4qtTQaMkJiKf4wteIlGy5KvdMsSS-rS0",
        "https://media.licdn.com/dms/image/C4D22AQHIXGTAQSki7A/feedshare-shrink_800/0/1671352310254?e=1692230400&v=beta&t=l_MaPdf_2udvpAdHvv7dZjFmTs-tgzx49OoTSAn_0AA",
        "https://media.licdn.com/dms/image/C4D22AQGxo-QPWcsw4Q/feedshare-shrink_800/0/1671351670582?e=1692230400&v=beta&t=xkU7YPVuu5rql8b1qEL8latEqRYWjMtDeQQx3aJZW5M",
        "https://media.licdn.com/dms/image/C4D22AQGSzJjA1JRqTQ/feedshare-shrink_800/0/1671352309771?e=1691625600&v=beta&t=81BTZhs67EXdgnb_7-AipGrg0A_YBfGrSt4RVM-Jn0A",
    ]);

      const [selectedImage, setSelectedImage] = useState(null);

      const handleImageClick = (image) => {
          setSelectedImage(image);
      };

      const handleCloseImage = () => {
          setSelectedImage(null);
      };

const List = ({ label, link, LiClass }) => (
  <li className={LiClass} onClick={() => handleImageClick(link)}> 
    <img className="honeycomb-cell__image " src={link} alt="" />
    <div className="honeycomb-cell__title">{label}</div>
  </li>
);

// shuffle array every 3s

useEffect(() => {
    const interval = setInterval(() => {
        setImages(shuffle(images));
    }, 3000);
    return () => clearInterval(interval);
}, [images]);



  return (
      <div className="container">
          <ul className="honeycomb" lang="es">
              <List
                  label=" "
                  link={images[0]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
                  
              />
              <List
                  label=" "
                  link={images[1]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="disable honeycomb-cell noneTab mobilDisplay"
              />
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell noneTab noneMobil mobil"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell noneTab noneMobil"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
          </ul>

          <ul className="honeycomb" lang="es">
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[1]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="disable honeycomb-cell tab noneMobil mobilDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="disable honeycomb-cell  tab noneMobil mobil"
              />
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
          </ul>
          <ul className="honeycomb" lang="es">
              <List
                  label=" "
                  link={images[1]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="disable honeycomb-cell tab noneMobil mobilDisplay"
              />
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell  noneTab mobil"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell tab mobil"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="enable honeycomb-cell  noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[1]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
          </ul>
          <ul className="honeycomb" lang="es">
              <List
                  label=" "
                  link={images[2]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell tab noneMobil mobilDisplay"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="disable honeycomb-cell tab mobil"
              />
              <List
                  label=" "
                  link={images[1]}
                  LiClass="enable honeycomb-cell  noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
          </ul>
          <ul className="honeycomb" lang="es">
              <List
                  label=" "
                  link={images[4]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[1]}
                  LiClass="disable honeycomb-cell noneTab noneMobil mobilDisplay"
              />
              <List
                  label=" "
                  link={images[2]}
                  LiClass="enable honeycomb-cell noneTab mobil"
              />
              <List
                  label=" "
                  link={images[3]}
                  LiClass="disable honeycomb-cell noneTab noneMobil"
              />
              <List
                  label=" "
                  link={images[4]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[5]}
                  LiClass="disable honeycomb-cell noneTab tabDisplay"
              />
              <List
                  label=" "
                  link={images[0]}
                  LiClass="enable honeycomb-cell noneTab tabDisplay"
              />
          </ul>
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
      </div>
  );
};

export default Gallery;




function shuffle(arr) {
    var ctr = arr.length,
        temp,
        index;
    
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
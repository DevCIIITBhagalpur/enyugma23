import { React, useEffect, useRef } from "react";
import "./gallery.scss";
import { useState } from "react";
import { gallery } from "./list.js";

const Gallery = () => {
    const [images, setImages] = useState(gallery);

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
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                setIndex(index + 1);
                setImages(structuredClone(shuffle(images)));
            },

            5000,
        );

        return () => {
            resetTimeout();
        };
    }, [images, index]);

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
                    link={images[6]}
                    LiClass="disable honeycomb-cell noneTab noneMobil"
                />
                <List
                    label=" "
                    link={images[7]}
                    LiClass="disable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[8]}
                    LiClass="disable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[9]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
            </ul>

            <ul className="honeycomb" lang="es">
                <List
                    label=" "
                    link={images[10]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[0]}
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
                    link={images[6]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
            </ul>
            <ul className="honeycomb" lang="es">
                <List
                    label=" "
                    link={images[7]}
                    LiClass="disable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[8]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[9]}
                    LiClass="disable honeycomb-cell tab noneMobil mobilDisplay"
                />
                <List
                    label=" "
                    link={images[10]}
                    LiClass="enable honeycomb-cell  noneTab mobil"
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
                    link={images[6]}
                    LiClass="disable honeycomb-cell tab mobil"
                />
                <List
                    label=" "
                    link={images[7]}
                    LiClass="enable honeycomb-cell  noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[8]}
                    LiClass="disable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[9]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
            </ul>
            <ul className="honeycomb" lang="es">
                <List
                    label=" "
                    link={images[10]}
                    LiClass="enable honeycomb-cell noneTab tabDisplay"
                />
                <List
                    label=" "
                    link={images[10]}
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
                    link={images[6]}
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
import React from "react";
import border from "../../assets/border.png";
import "./CulturalCard.scss";
const CulturalCard = ({ imgUrl, eventName, eventDesc, ...others }) => {
    return (
        <div
            className="card"
            {...others}
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
            }}
        >
            <img
                src={border}
                alt="bg-removebg-preview"
                border="0"
                className="bg"
            />
            <div className="overlay">
                <h1 className="title">{eventName}</h1>
                <p>{eventDesc}</p>
                <button>Register</button>
            </div>
        </div>
    );
};

export default CulturalCard;

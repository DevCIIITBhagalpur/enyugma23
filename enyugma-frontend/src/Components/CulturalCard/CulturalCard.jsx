/* eslint-disable react/prop-types */
import React from "react";
import border from "../../assets/border.png";
import "./CulturalCard.scss";

//{ imgUrl, eventName, eventDesc, ...others }
const CulturalCard = (props) => {
  return (
    <div
      className="card"
      {...props.others}
      style={{
        backgroundImage: `url(${props.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    >
      <img src={border} alt="bg-removebg-preview" border="0" className="bg" />
      <div className="overlay">
        <h1 className="title">{props.eventName}</h1>
        <p>{props.eventDesc}</p>
        <button>Register</button>
      </div>
    </div>
  );
};

export default CulturalCard;

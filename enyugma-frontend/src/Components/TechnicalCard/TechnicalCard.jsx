/* eslint-disable react/prop-types */
import "./TechnicalCard.scss";
import { React, useEffect } from "react";

const TechnicalCard = (props) => {
  return (
    <div className="card" elevation={8}>
      <img
        className="avatar"
        width="300"
        height="480"
        src={props.imgUrl}
        alt="avatar"
      />
      <div className="creditoverlay"></div>
      <div className="info">
        <h1>{props.eventName}</h1>
        <p>{props.eventDesc}</p>
      </div>
    </div>
  );
};

export default TechnicalCard;

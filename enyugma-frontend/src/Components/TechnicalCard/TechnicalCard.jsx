/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import "./TechnicalCard.scss";
import { React, useEffect } from "react";

const TechnicalCard = (props) => {
  return (
      <Paper className="card" elevation={16} sx={{
        borderRadius: "20px",
      }}>
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
      </Paper>
  );
};

export default TechnicalCard;

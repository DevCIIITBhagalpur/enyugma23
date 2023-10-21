/* eslint-disable react/prop-types */
import { Button, Paper } from "@mui/material";
import "./TechnicalCard.scss";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TechnicalCard = (props) => {
const hoverRef = useRef(null);

useEffect(() => {
    const hover = hoverRef.current;
    hover.addEventListener("mouseover", () => {
        hover.style.opacity = 1;
        hover.style.backgroundColor = "rgba(0,0,0,0.8)";
    });
    hover.addEventListener("mouseout", () => {
        hover.style.opacity = 0;
        hover.style.backgroundColor = "rgba(0,0,0,0.5)";
    });
}, []);

    return (
        <Paper
            className="tcard"
            elevation={16}
            sx={{
                borderRadius: "20px",
            }}
        >
            <img
                className="avatar"
                width="300"
                height="480"
                src={props.banner}
                alt="avatar"
            />
            <div className="creditoverlay"></div>
            <div className="info" ref={hoverRef}>
                <h1>{props.name}</h1>
                <p>{
                props.description.length > 100 ? props.description.substring(0, 100) + "..." : props.description
                }</p>

                <Link to={`./${props.id}`} className="btn">
                    <span>View &#10138;  </span>
                </Link>
            </div>
        </Paper>
    );
};

export default TechnicalCard;

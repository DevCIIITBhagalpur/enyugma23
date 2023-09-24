/* eslint-disable react/prop-types */
import { Button, Paper } from "@mui/material";
import "./index.scss";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const WorkshopCard = (props) => {
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
            className="box"
            elevation={16}
            sx={{
                borderRadius: "20px",
                backgroundImage: `url(${props.imgUrl})`,
                width: "300px",
                height: "300px",
            }}
        >
            <div className="box-inner">

                {/* <div className="creditoverlay"></div> */}
                <div className="info" ref={hoverRef}>
                    <h1>{props.eventName}</h1>
                    <p>{props.eventDesc}</p>

                    <Link to={`./${props.id}`} className="btn">
                        <span>View &#10138; </span>
                    </Link>
                </div>
            </div>
        </Paper>
    );
};

export default WorkshopCard;

/* eslint-disable react/prop-types */
import  { useEffect, useRef } from "react";

import "./CulturalCard.scss";
import { Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

//{ imgUrl, eventName, eventDesc, ...others }
const CulturalCard = (props) => {
      const hoverRef = useRef(null);
      const bgref = useRef(null);
      const cardref = useRef(null);

      useEffect(() => {
          const hover = hoverRef.current;
          const bg = bgref.current;
          const card = cardref.current;
          let off,onn;
          hover.addEventListener("mouseover", () => {
              if (off) clearTimeout(off);
              if (onn) clearTimeout(onn);
              hover.style.opacity = 1;
              bg.style.backgroundColor = "rgba(0,0,0,0.8)";
              card.style.clipPath =
                  "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)";

              //   // onn = setTimeout(() => {
              //   //   card.style.clipPath =
              //   //       "";
              //   // }, 1000);
          });
          hover.addEventListener("mouseout", () => {
              if (onn) clearTimeout(onn);
              if (off) clearTimeout(off);
              hover.style.opacity = 0;
              bg.style.backgroundColor = "rgba(0,0,0,0.5)";
              card.style.clipPath =
                  "polygon(0 4%, 15% 15%, 3% 0, 96% 0, 85% 15%, 100% 4%, 100% 98%, 85% 85%, 96% 100%, 3% 100%, 15% 85%, 0 96%)";
              // // off = setTimeout(() => {
              // // card.style.clipPath =
              // //     " ";
              // // }, 1000);
          });
      }, []);
  return (
      <div
          style={{
              borderRadius: "20px",
              padding: "0 !important",
              backgroundColor: "rgba(0,0,0,0.5)",
              boxShadow: " 0px 0px 16px 0px rgba(0,0,0,0.9)",
              width: "auto",
          }}
      >
          <Paper
              className="card"
              {...props.others}
              style={{
                  backgroundImage: `url(${props.banner})`,
                  clipPath:
                      "polygon(0 4%, 15% 15%, 3% 0, 96% 0, 85% 15%, 100% 4%, 100% 98%, 85% 85%, 96% 100%, 3% 100%, 15% 85%, 0 96%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  margin: "0",
                  transition: "all 0.5s ease-in-out",
              }}
              ref={cardref}
          >
              {/* <img src={border} alt="bg-removebg-preview" border="0" className="bg" /> */}
              <div className="overlay" ref={bgref}>
                  <div className="info" ref={hoverRef}>
                      <h1>{props.name}</h1>
                      <p>
                          {props.description.length > 100
                              ? props.description.substring(0, 100) + "..."
                              : props.description}
                      </p>

                      <Link to={`./${props.id}`} className="btn">
                          <span>View &#10138; </span>
                      </Link>
                  </div>
              </div>
          </Paper>
      </div>
  );
};

export default CulturalCard;

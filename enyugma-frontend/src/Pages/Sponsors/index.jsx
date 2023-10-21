import { Box } from "@mui/material";
import Navbar from "../../Components/Navbar/index.jsx";
import SponsorCard from "../../Components/SponsorCard/index.jsx";
import "./index.scss";
import cultural from "../../assets/bgs/cultural5.webp";
import sponsorList from "./list.js";
import { Suspense, useState } from "react";
import Preloader from "../../Components/Preloader/Preloader.jsx";

export default function Sponsors() {
    return (
        <Suspense fallback={<Preloader />}>
        <Box
            sx={{
                backgroundImage: `linear-gradient(
            180deg,
            rgba(6, 12, 32, 0) 20%,
            rgb(6,12,32) 50%
        ), url(${cultural})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                minHeight: "100vh",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(6,12,32,0.5)",
                    zIndex: 0,
                }}
            ></div>
            <Navbar />
            <div className="sponsors">
                <div className="sponsors-container">
                    <div className="sponsors-title">
                        <h1
                            style={{
                                zIndex: 1,
                            }}
                        >
                            Our Past Sponsors
                        </h1>
                    </div>
                    <div className="sponsors-list">
                        {sponsorList.map((sponsor) => {
                            return (
                                // <div className="wrap" key={sponsor.name}>
                                <SponsorCard
                                    key={sponsor.name}
                                    link={sponsor.link}
                                    name={sponsor.name}
                                    logo={sponsor.logo}
                                />
                                // </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Box>
        </Suspense>
    );
}

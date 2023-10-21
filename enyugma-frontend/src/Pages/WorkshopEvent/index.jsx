import "./index.scss";

import { useState, Suspense } from "react";
import list from "./list.js";
import WorkshopCard from "../../Components/WorkShopCard";
import Navbar from "../../Components/Navbar";
import { Box, Typography } from "@mui/material";
import Stars2 from "../../Components/Stars2/index.jsx";
import Preloader from "../../Components/Preloader/Preloader.jsx";

function createTechnicalCard(technicalEvent) {
    return (
        <WorkshopCard
            id={technicalEvent.id}
            key={technicalEvent.id}
            name={technicalEvent.name}
            description={technicalEvent.description}
            imgUrl={technicalEvent.banner}
        />
    );
}

export default function WorkshopEvent() {
    return (
        <>
            <Suspense fallback={<Preloader />}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        // minHeight: "100vh",
                    }}
                    className="bbox"
                >
                    <div className="overlay">
                        <Navbar />
                        <div className="abs">
                            <Stars2 />
                        </div>
                        <h1 className="word">
                            <div className="letter" style={{ "--i": -4 }}>
                                W
                            </div>
                            <div className="letter" style={{ "--i": 4 }}>
                                o
                            </div>
                            <div className="letter" style={{ "--i": -3 }}>
                                r
                            </div>
                            <div className="letter" style={{ "--i": 3 }}>
                                k
                            </div>
                            <div className="letter" style={{ "--i": -2 }}>
                                s
                            </div>
                            <div className="letter" style={{ "--i": 2 }}>
                                h
                            </div>
                            <div className="letter" style={{ "--i": -1 }}>
                                o
                            </div>
                            <div className="letter" style={{ "--i": 1 }}>
                                p
                            </div>
                            <div className="letter" style={{ "--i": 0 }}>
                                &nbsp;
                            </div>
                            <div className="letter" style={{ "--i": 1 }}>
                                E
                            </div>
                            <div className="letter" style={{ "--i": -1 }}>
                                v
                            </div>
                            <div className="letter" style={{ "--i": 2 }}>
                                e
                            </div>
                            <div className="letter" style={{ "--i": -2 }}>
                                n
                            </div>
                            <div className="letter" style={{ "--i": 3 }}>
                                t
                            </div>
                            <div className="letter" style={{ "--i": -3 }}>
                                s
                            </div>
                        </h1>
                        <br />
                        <br />
                        <div className="workshopEvent">
                            {list.map(createTechnicalCard)}
                        </div>
                    </div>
                </Box>
            </Suspense>
        </>
    );
}

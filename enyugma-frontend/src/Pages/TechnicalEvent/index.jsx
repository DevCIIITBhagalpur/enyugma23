import "./index.scss";
import { Suspense, useState } from "react";
import technicalEvent from "./technicalEvent";
import TechnicalCard from "../../Components/TechnicalCard/TechnicalCard";
import Navbar from "../../Components/Navbar";
import { Box, Typography } from "@mui/material";
import Stars2 from "../../Components/Stars2/index.jsx";
import Preloader from "../../Components/Preloader/Preloader.jsx";

function createTechnicalCard(technicalEvent) {
    return (
        <TechnicalCard
            id={technicalEvent.id}
            key={technicalEvent.id}
            name={technicalEvent.name}
            description={technicalEvent.description}
            banner={technicalEvent.banner}
        />
    );
}

export default function TechnicalEvent() {
    return (
        <>
        <Suspense fallback={<Preloader />}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="box"
            >
                <div className="overlay">
                    <Navbar />
                    <div className="abs">
                        <Stars2 />
                    </div>
                    <h1 className="word">
                        <div className="letter" style={{ "--i": -4 }}>
                            T
                        </div>
                        <div className="letter" style={{ "--i": 4 }}>
                            e
                        </div>
                        <div className="letter" style={{ "--i": -3 }}>
                            c
                        </div>
                        <div className="letter" style={{ "--i": 3 }}>
                            h
                        </div>
                        <div className="letter" style={{ "--i": -2 }}>
                            n
                        </div>
                        <div className="letter" style={{ "--i": 2 }}>
                            i
                        </div>
                        <div className="letter" style={{ "--i": -1 }}>
                            c
                        </div>
                        <div className="letter" style={{ "--i": 1 }}>
                            a
                        </div>
                        <div className="letter" style={{ "--i": -0 }}>
                            l
                        </div>
                        <div className="letter" style={{ "--i": 0 }}>
                            &nbsp;
                        </div>
                        <div className="letter" style={{ "--i": -1 }}>
                            E
                        </div>
                        <div className="letter" style={{ "--i": 1 }}>
                            v
                        </div>
                        <div className="letter" style={{ "--i": -2 }}>
                            e
                        </div>
                        <div className="letter" style={{ "--i": 2 }}>
                            n
                        </div>
                        <div className="letter" style={{ "--i": -3 }}>
                            t
                        </div>
                        <div className="letter" style={{ "--i": 3 }}>
                            s
                        </div>
                    </h1>
                    <div className="technicalEvent">
                        {technicalEvent.map(createTechnicalCard)}
                    </div>
                </div>
            </Box>
            </Suspense>
        </>
    );
}

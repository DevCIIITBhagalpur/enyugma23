import "./index.scss";
import { useState } from "react";
import events from "./list.js";
import CulturalCard from "../../Components/CulturalCard/CulturalCard.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import { Box } from "@mui/material";
import Stars2 from "../../Components/Stars2/index.jsx";

function createCulturalCard(technicalEvent) {
    return (
        <CulturalCard
            id={technicalEvent.id}
            key={technicalEvent.id}
            name={technicalEvent.name}
            description={technicalEvent.description}
            banner={technicalEvent.banner}
        />
    );
}

export default function CulturalEvent() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="cbox"
            >
                <div className="coverlay">
                    <div className="abs">
                        <Stars2 />
                    </div>
                    <Navbar />
                    <h1 className="word">
                        <div className="letter" style={{ "--i": -4 }}>
                            C
                        </div>
                        <div className="letter" style={{ "--i": 4 }}>
                            u
                        </div>
                        <div className="letter" style={{ "--i": -3 }}>
                            l
                        </div>
                        <div className="letter" style={{ "--i": 3 }}>
                            t
                        </div>
                        <div className="letter" style={{ "--i": -2 }}>
                            u
                        </div>
                        <div className="letter" style={{ "--i": 2 }}>
                            r
                        </div>
                        <div className="letter" style={{ "--i": -1 }}>
                            a
                        </div>
                        <div className="letter" style={{ "--i": 1 }}>
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
                        <div className="letter" style={{ "--i": -0 }}>
                            e
                        </div>
                        <div className="letter" style={{ "--i": 0 }}>
                            n
                        </div>
                        <div className="letter" style={{ "--i": -1 }}>
                            t
                        </div>
                        <div className="letter" style={{ "--i": 1 }}>
                            s
                        </div>
                    </h1>
                    <br />
                    <br />
                    <div className="culturalEvent">
                        {events.map(createCulturalCard)}
                    </div>
                </div>
            </Box>
        </>
    );
}

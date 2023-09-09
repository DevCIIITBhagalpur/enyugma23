import "./index.scss";
import { useState } from "react";
import events from "./list.js";
import CulturalCard from "../../Components/CulturalCard/CulturalCard.jsx";
import Navbar from "../../Components/Navbar/index.jsx";

function createCulturalCard(technicalEvent) {
    return (
        <CulturalCard
            id={technicalEvent.id}
            key={technicalEvent.id}
            eventName={technicalEvent.eventName}
            eventDesc={technicalEvent.eventDesc}
            imgUrl={technicalEvent.imgUrl}
        />
    );
}

export default function CulturalEvent() {
    return (
        <>
            <Navbar />
            <div className="culturalEvent">
                {events.map(createCulturalCard)}
            </div>
        </>
    );
}

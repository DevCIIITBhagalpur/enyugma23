import "./index.scss";
import { useState } from "react";
import technicalEvent from "./technicalEvent";
import TechnicalCard from "../../Components/TechnicalCard/TechnicalCard";
import Navbar from "../../Components/Navbar";

function createTechnicalCard(technicalEvent) {
  return (
    <TechnicalCard
      id={technicalEvent.id}
      key={technicalEvent.id}
      eventName={technicalEvent.eventName}
      eventDesc={technicalEvent.eventDesc}
      imgUrl={technicalEvent.imgUrl}
    />
  );
}

export default function TechnicalEvent() {
  return (
    <>
      <Navbar />
      <div className="technicalEvent">
        {technicalEvent.map(createTechnicalCard)}
      </div>
    </>
  );
}

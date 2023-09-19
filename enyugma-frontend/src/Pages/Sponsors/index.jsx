import Navbar from "../../Components/Navbar/index.jsx";
import SponsorCard from "../../Components/SponsorCard/index.jsx";
import "./index.scss";
import sponsorList from "./list.js";
import { useState } from "react";

export default function Sponsors() {
    
    return (
        <>
        <Navbar />
        <div className="sponsors">
            <div className="sponsors-container">
                <div className="sponsors-title">
                    <h1>Our Past Sponsors</h1>
                </div>
                <div className="sponsors-list">
                    {sponsorList.map((sponsor) => {
                        return <SponsorCard key={sponsor.name} link={sponsor.link} name={sponsor.name} logo={sponsor.logo} />;
                    })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
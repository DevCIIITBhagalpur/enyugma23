import { NavLink } from "react-router-dom";
import "./index.scss";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Tooltip, Icon } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import sponsorsicon from "../../assets/sponsors.webp";
import { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
export default function MenuBar() {
    const [oopen, setOopen] = useState(false);
    useEffect(() => {
        if (oopen) {
            document.body.style.overflow = "hidden";
            // disable for mobile

            const html = document.documentElement;
            html.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            const html = document.documentElement;
            html.style.overflow = "auto";
        }
    }, [oopen]);
    return (
        <>
            {oopen && <div className="moverlay"></div>}
            <nav className="menu">
                <input
                    type="checkbox"
                    href="#"
                    className="menu-open"
                    name="menu-open"
                    id="menu-open"
                />
                <label
                    className="menu-open-button"
                    htmlFor="menu-open"
                    onClick={() => setOopen(!oopen)}
                >
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </label>
                <NavLink to="/events/technical" className="menu-item">
                    <div className="text">Technical</div>
                    <CodeOffIcon />
                </NavLink>
                <NavLink to="/events/cultural" className="menu-item">
                    <div className="text">Cultural</div>
                    <HistoryEduIcon />
                </NavLink>
                <NavLink to="/events/workshop" className="menu-item">
                    <div className="text">Workshops</div>
                    <WorkspacesIcon />
                </NavLink>
                <NavLink to="/sponsors" className="menu-item">
                    <div className="text">Sponsors</div>
                    <img
                        src={sponsorsicon}
                        style={{
                            filter: "invert(1)",
                            width: "32px",
                        }}
                    />
                </NavLink>
                <NavLink to="/register" className="menu-item">
                    <div className="text">Register</div>
                    <LoginIcon />
                </NavLink>
            </nav>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                style={{
                    display: "none",
                }}
            >
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation="10"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feGaussianBlur
                            in="goo"
                            stdDeviation="3"
                            result="shadow"
                        />
                        <feColorMatrix
                            in="shadow"
                            mode="matrix"
                            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                            result="shadow"
                        />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feBlend in2="shadow" in="goo" result="goo" />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation="10"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>
        </>
    );
}

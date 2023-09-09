import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("nav");
    const openNav = () => {
        setActiveNav("nav openNav");
    };
    const closeNav = () => {
        setActiveNav("nav");
    };

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} alt="" className="logoImg" />
                    </div>

                    <div className={activeNav}>
                        <div className="close" onClick={closeNav}>
                            <CloseIcon />
                        </div>
                        <ul className="navList">
                            <li className="navItem">
                                <Link to="/events/technical" className="link">Technical</Link>
                            </li>
                            <li className="navItem">
                                <Link to="/events/cultural" className="link">Cultural</Link>
                            </li>
                            <li className="navItem">
                                <Link to="#" className="link">Workshops</Link>
                            </li>
                            <li className="navItem">
                                <Link to="#" className="link">Sponsors</Link>
                            </li>
                            <li className="navItem">
                                <button className="registerBtn">
                                    Register
                                </button>
                            </li>
                        </ul>
                    </div>

                    <MenuIcon className="menu" onClick={openNav} />
                </div>
            </header>
        </>
    );
};

export default Navbar;

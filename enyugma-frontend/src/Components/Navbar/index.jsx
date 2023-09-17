import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

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
                    <Link className="logo" to="/">
                        <img src={logo} alt="" className="logoImg" />
                    </Link>

                    <div className={activeNav}>
                        <div className="close" onClick={closeNav}>
                            <CloseIcon />
                        </div>
                        <ul className="navList">
                            <li className="navItem">
                                <NavLink to="/events/technical" className="link">Technical</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink to="/events/cultural" className="link">Cultural</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink to="/events/workshop" className="link">Workshops</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink to="/sponsors" className="link">Sponsors</NavLink>
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

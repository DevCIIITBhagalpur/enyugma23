import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.webp";
import iiitbh from "../../assets/iiitbh.webp";
import "./navbar.scss";
import MenuBar from "../Menu/index.jsx";
import { Divider } from "@mui/material";

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
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                backgroundColor: "white",
                                width: "2px",
                            }}
                        />
                        <img src={iiitbh} alt="" className="logoImg" />
                    </Link>
                    {window.innerWidth > 768 ? (
                        <>
                            <div className={activeNav}>
                                <div className="close" onClick={closeNav}>
                                    <CloseIcon />
                                </div>
                                <ul className="navList">
                                    <li className="navItem">
                                        <NavLink
                                            to="/events/technical"
                                            className="link"
                                        >
                                            Technical
                                        </NavLink>
                                    </li>
                                    <li className="navItem">
                                        <NavLink
                                            to="/events/cultural"
                                            className="link"
                                        >
                                            Cultural
                                        </NavLink>
                                    </li>
                                    <li className="navItem">
                                        <NavLink
                                            to="/events/workshop"
                                            className="link"
                                        >
                                            Workshops
                                        </NavLink>
                                    </li>
                                    <li className="navItem">
                                        <NavLink
                                            to="/sponsors"
                                            className="link"
                                        >
                                            Sponsors
                                        </NavLink>
                                    </li>
                                    <li className="navItem">
                                        <Link
                                            to="/register"
                                            className="registerBtn"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <MenuBar />
                    )}
                </div>
            </header>
        </>
    );
};

export default Navbar;

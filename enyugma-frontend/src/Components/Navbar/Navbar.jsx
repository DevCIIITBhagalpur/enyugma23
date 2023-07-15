import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {

  

 


  const [activeNav, setActiveNav] = useState("nav");
const openNav = () =>{
setActiveNav('nav openNav');
}
const closeNav = ()=>{
  setActiveNav('nav');
}



  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" className="logoImg" />
          </div>

          <div className={activeNav}>
          <div className="close" onClick={closeNav} >
              <CloseIcon />
            </div>
            <ul className="navList">
              <li className="navItem">
                <a href="#">Events</a>
              </li>
              <li className="navItem">
                <a href="#">Workshops</a>
              </li>
              <li className="navItem">
                <a href="#">Sponsors</a>
              </li>
            </ul>
            
          </div>
          <div className="registerDiv">
              <button className="registerBtn" >
                Register
              </button>
            </div>

        
            <MenuIcon className="menu" onClick={openNav} />
          
        </div>
      </header>

     
    </>
  );
};

export default Navbar;

import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {

  const [active, setActive] = useState("wrapper");
  const showLogin = () => {
    setActive("wrapper active-popup");
  };
  const removeLogin = () => {
    setActive("wrapper");
  };

 
  const showReg = () => {
    setActive("wrapper active active-popup");
  };
  const removeReg = () => {
    setActive("wrapper  active-popup");
  };

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
              <button className="registerBtn" onClick={showLogin}>
                Register
              </button>
            </div>

        
            <MenuIcon className="menu" onClick={openNav} />
          
        </div>
      </header>

      <div className= {active}>
        <span className="icon-close" onClick={removeLogin}>
          <CloseIcon />
        </span>
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <EmailIcon />
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockIcon />
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forget password?</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <a href="#" className="register-link" onClick={showReg}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Register</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <EmailIcon />{" "}
              </span>
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockIcon />
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">
              Register
            </button>
            <div className="login-register">
              <p>
                Already have an account?
                <a href="#" className="login-link" onClick={removeReg}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;

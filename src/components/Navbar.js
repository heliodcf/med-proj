import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../Images/RaphaelCunha.png";

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">
        <div className="navbarlogo">
          <img src={Logo} className="logo" alt="logo" />
        </div>
      </Link>
      <div>
      <Link to="/"><div className="menu">HOME</div></Link>
        <Link to="/about"><div className="menu">ABOUT</div></Link>
        <Link to="/signup"><div className="menu">SIGNUP</div></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../Images/RaphaelCunha.png";
import {removeToken} from '../Utils/token.util'
import { useNavigate } from "react-router-dom";

function Navbar({isUserLoggedIn, setUser}) {
  const navigate = useNavigate();
  const logout = () => {
    removeToken()
    setUser({})
    navigate('/')
  }
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
        {isUserLoggedIn ?  <div className="menu" onClick={logout}>LOGOUT</div> : <Link to="/login"><div className="menu">LOGIN</div></Link>}
       
       
        
      </div>
    </nav>
  );
}

export default Navbar;

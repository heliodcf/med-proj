import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import { Content } from "./Content";
import { valueToPercent } from "@mui/base";

function Sidebar() {
  return (
    <div className="side">
      <ul className="SidebarList">
        {Content.map((val, key) => {
          return (
            <li key={key} className="row">
              <NavLink to={val.link} className='links'>
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

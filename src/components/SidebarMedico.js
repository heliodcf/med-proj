import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import { ContentMedico } from "./ContentMedico"


function SidebarMedico() {
  return (
    <div className="side">
      <ul className="SidebarList">
        {ContentMedico.map((val, key) => {
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

export default SidebarMedico;

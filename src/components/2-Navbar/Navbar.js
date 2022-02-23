import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar" className="navbar-container">
        <div className="navbar-items">
          <ul>
            <li>
              <NavLink to="/">Bio</NavLink>
            </li>
            <li>
              <NavLink to="/Skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav id="menu" className="navbar-full">
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/Bio">Bio</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

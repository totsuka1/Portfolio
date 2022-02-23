import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar" className="navbar-container">
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/">Bio</Link>
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

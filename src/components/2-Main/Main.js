import React from "react";

import Navbar from "../Navbar/Navbar";

import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="main-overlay overlay">
          <div className="main-container">
            <h1>MAIN COMPONENT</h1>
            {/* routing for components goes here */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

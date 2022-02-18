import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import "./main.css";

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="main-overlay overlay">
          <div className="main-container">
            <Routes>
              <Route path="/Bio" element={<About />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

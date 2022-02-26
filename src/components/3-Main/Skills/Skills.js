import React from "react";

import "./skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div id="skills">
        <div className="text-container">
          <div className="skills-intro">
            <h2>My Proficiencies</h2>
          </div>
          <h4>
            //Proficiency intro text placeholder. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.//
          </h4>
        </div>
        <div className="skills-main-container">
          <div className="frontend-container skills-container">
            <div className="container-title">Frontend</div>
            <div className="container-icons">
              <img className="skill-icons" src="./icons/javascript.svg" />
            </div>
          </div>
          <div className="backend-container skills-container">
            <div className="container-title">Backend</div>
            <div className="container-icons"></div>
          </div>
          <div className="blockchain-container skills-container">
            <div className="container-title">Blockchain</div>
            <div className="container-icons"></div>
          </div>
          <div className="data-container skills-container">
            <div className="container-title">Data/Stats</div>
            <div className="container-icons"></div>
          </div>
          <div className="misc-container skills-container">
            {" "}
            <div className="container-title">Testing/Misc.</div>
            <div className="container-icons"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

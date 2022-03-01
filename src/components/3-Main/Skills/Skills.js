import React from "react";

import javascriptLogo from "./icons/javascript.svg";
import reactLogo from "./icons/react.svg";
import htmlLogo from "./icons/html5.svg";
import cssLogo from "./icons/css3.svg";

import nodejsLogo from "./icons/nodejs.svg";
import postgresqlLogo from "./icons/postgresql.svg";

import solidityLogo from "./icons/solidity.svg";
import ganacheLogo from "./icons/ganache.svg";
import truffleLogo from "./icons/truffle.svg";

import rLogo from "./icons/r.svg";

import gitLogo from "./icons/git.svg";
import mochaLogo from "./icons/mocha.svg";

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
              <img src={javascriptLogo} />
              <img src={reactLogo} />
              <img src={htmlLogo} />
              <img src={cssLogo} />
            </div>
          </div>
          <div className="backend-container skills-container">
            <div className="container-title">Backend</div>
            <div className="container-icons">
              <img src={nodejsLogo} />
              <img src={postgresqlLogo} />
            </div>
          </div>
          <div className="blockchain-container skills-container">
            <div className="container-title">Blockchain</div>
            <div className="container-icons">
              <img src={solidityLogo} />
              <img src={ganacheLogo} />
              <img src={truffleLogo} />
            </div>
          </div>
          <div className="data-container skills-container">
            <div className="container-title">Data/Stats</div>
            <div className="container-icons">
              <img src={rLogo} />
            </div>
          </div>
          <div className="misc-container skills-container">
            <div className="container-title">Testing/Misc.</div>
            <div className="container-icons">
              <img src={gitLogo} />
              <img src={mochaLogo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

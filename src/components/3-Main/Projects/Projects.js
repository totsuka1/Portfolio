import React from "react";

import reactLogo from "../../../icons/react.svg";
import solidityLogo from "../../../icons/solidity.svg";
import web3jsLogo from "../../../icons/web3js.svg";
import ipfsLogo from "../../../icons/ipfs.png";
import ganacheLogo from "../../../icons/ganache.svg";

import "./projects.css";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      open: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    if (this.state.open === evt.target.className[0]) {
      this.setState({ open: null });
    } else {
      this.setState({ open: evt.target.className[0] });
    }
  }

  render() {
    return (
      <div id="projects">
        <div className="text-container">
          <div className="projects-intro">
            <h2>My Portfolio</h2>
          </div>
          <h4>
            //Project intro text placeholder. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit... Some of the apps I've built.
          </h4>
        </div>
        <div className="projects-main-container">
          <div
            className={
              "1 project-container " +
              (this.state.open === "1" ? "expanded" : "")
            }
          >
            <div className="1 project-banner" onClick={this.handleClick}>
              <div className="1 project-title">Blocks</div>
              <div className="1 project-subtitle">
                A Decentralized File Storage Platform
              </div>
            </div>
            {this.state.open === "1" ? (
              <div className="1 project-details">
                <div className="1 project-description">
                  //Project card text and info placeholder. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit...
                </div>
                <div className="1 project-tools">
                  Key technologies used:
                  <div className="container-icons">
                    <img src={reactLogo} />
                    <img src={solidityLogo} />
                    <img src={web3jsLogo} />
                    <img src={ipfsLogo} />
                    <img src={ganacheLogo} />
                  </div>
                </div>
                <div className="1 project-demo">
                  <button className="1 project-link">Live Site</button>
                  <button className="1 project-github">Source code</button>
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={
              "2 project-container " +
              (this.state.open === "2" ? "expanded" : "")
            }
            onClick={this.handleClick}
          >
            <div className="2 project-title">Iki</div>
            <div className="2 project-subtitle">
              A Mindfullness Chrome Extension
            </div>
            {this.state.open === "2" ? (
              <div className="2 project-details">
                //Project card text and info placeholder. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit...
              </div>
            ) : null}
          </div>
          <div
            className={
              "3 project-container " +
              (this.state.open === "3" ? "expanded" : "")
            }
            onClick={this.handleClick}
          >
            <div className="3 project-title">Udemy-Larks</div>
            <div className="3 project-subtitle">
              An E-Commerce Marketplace for Educational Videos
            </div>
            {this.state.open === "3" ? (
              <div className="3 project-details">
                //Project card text and info placeholder. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit...
              </div>
            ) : null}
          </div>
          <div
            className={
              "4 project-container " +
              (this.state.open === "4" ? "expanded" : "")
            }
            onClick={this.handleClick}
          >
            <div className="4 project-title">This Website</div>
            <div className="4 project-subtitle">
              My Portfolio Website, Built From the Ground Up
            </div>
            {this.state.open === "4" ? (
              <div className="4 project-details">
                //Project card text and info placeholder. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit...
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

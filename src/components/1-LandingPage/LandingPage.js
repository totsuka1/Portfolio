import React from "react";

import "./landingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="greeting-overlay overlay">
          <div className="greeting-container">
            <div className="greeting-text">
              <h1 className="LP-text-1">Hi There!</h1>
              <h1 className="LP-text-2">I'm Takumi.</h1>
              <h1 className="LP-text-3">A Software Engineer.</h1>
            </div>
          </div>
          <div className="learn-more-container">
            Get To Know Me
            <br />
            'Arrow Goes Here'
          </div>
        </div>
      </header>
    );
  }
}

export default LandingPage;

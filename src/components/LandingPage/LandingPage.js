import React from "react";

import "./landingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="greeting">
          <h1 className="landing-page-greeting-text">
            Hi There!
            <br />
            I'm Takumi.
            <br />A Software Engineer.
          </h1>
        </div>
        <div className="learn-more-tab">Get To Know Me</div>
      </div>
    );
  }
}

export default LandingPage;

import React from "react";

import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <nav id="footer" className="footer-container">
        <div className="footer-items">Takumi Otsuka 2022 </div>
        <div className="social-icons">
          <a href={"https://www.linkedin.com/in/takumiotsuka/"}>LI</a>
          <a href={"https://github.com/totsuka1"}>GH</a>
        </div>
      </nav>
    );
  }
}

export default Footer;

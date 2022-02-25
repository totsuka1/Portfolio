import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <nav id="footer" className="footer-container">
        <div className="footer-items">Takumi Otsuka 2022 </div>
        <div className="social-icons">
          <a href={"https://www.linkedin.com/in/takumiotsuka/"}>
            <FontAwesomeIcon className="fa-footer" icon={["fab", "linkedin"]} />
          </a>
          <a href={"https://github.com/totsuka1"}>
            <FontAwesomeIcon className="fa-footer" icon={["fab", "github"]} />
          </a>
        </div>
      </nav>
    );
  }
}

export default Footer;

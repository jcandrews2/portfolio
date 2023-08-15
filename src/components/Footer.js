import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link
        target="_blank"
        rel="noreferrer"
        to="https://www.linkedin.com/in/james-andrews-b513b2253/"
      >
        <div className="linkedin-images">
          <img
            id="linkedin-static"
            src={require("../images/Linkedin.png")}
            alt="linkedin-static"
          />
          <img
            id="linkedin-active"
            src={require("../images/Linkedin.gif")}
            alt="linkedin-active"
          />
        </div>
      </Link>
      <Link to="/Share">
        <p id="share-link"> Share </p>
      </Link>
    </div>
  );
};

export default Footer;

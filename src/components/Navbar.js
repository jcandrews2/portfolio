import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/about" className="home-page">
          James
          <br />
          Andrews
        </Link>
        <ul>
          <li>
            <Link to="/about" className="about-page">
              About
            </Link>
            <div className="lineUnder">
              <div className="lineOver"></div>
            </div>
          </li>
          <li>
            <Link to="/resume" className="resume-page">
              Resume
            </Link>
            <div className="lineUnder">
              <div className="lineOver"></div>
            </div>
          </li>
          <li>
            <Link to="/contact" className="contact-page">
              Contact
            </Link>
            <div className="lineUnder">
              <div className="lineOver"></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

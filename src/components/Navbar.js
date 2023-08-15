import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/about" className="home-page">
          James<br></br>Andrews
        </Link>
        <ul>
          <li>
            <Link to="/about" className="about-page">
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" className="resume-page">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className="contact-page">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

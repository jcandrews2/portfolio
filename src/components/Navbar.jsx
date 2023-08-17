import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const [className, setClassName] = useState("lineOver");
  return (
    <div
      className="navbar"
      onMouseEnter={() => setClassName("lineOverAnimate")}
      onMouseLeave={() => setClassName("lineOver")}
    >
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
      <div className={styles.lineUnder}>
        <div className={styles[className]}></div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import LineAnimation from './LineAnimation';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="pages-container">
        <nav>
          <Link to="/about" className="home-page">
            James
            <br />
            Andrews
          </Link>

          <Link to="/about" className="other-page">
            About
          </Link>
          <LineAnimation />

          <Link to="/resume" className="other-page">
            Resume
          </Link>
          <LineAnimation />

          <Link to="/contact" className="other-page">
            Contact
          </Link>
          <LineAnimation />
        </nav>
      </div>

      <div className="social-container">
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://www.linkedin.com/in/james-andrews-b513b2253/"
        >
          <div className="linkedin-images">
            <img
              id="linkedin-static"
              src={require('../media/Linkedin.png')}
              alt="linkedin-static"
            />
            <img
              id="linkedin-active"
              src={require('../media/Linkedin.gif')}
              alt="linkedin-active"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

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
            <div className="line-animation">About</div>
          </Link>

          <Link to="/resume" className="other-page">
            <div className="line-animation">Resume</div>
          </Link>

          <Link to="/contact" className="other-page">
            <div className="line-animation">Contact</div>
          </Link>
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

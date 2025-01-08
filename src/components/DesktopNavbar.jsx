import React from 'react';
import '../styles/DesktopNavbar.css';
import Socials from './Socials';
import { Link } from 'react-router-dom';

const DesktopNavbar = () => {
  return (
    <>
      <div className="desktop-navbar-boundary"></div>
      <div className="desktop-navbar">
        <div>
          <header>
            <Link to="/about" className="home-page">
              James
              <br />
              Andrews
            </Link>
          </header>
          <nav>
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

        <Socials />
      </div>
    </>
  );
};

export default DesktopNavbar;

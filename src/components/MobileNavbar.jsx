import React from 'react';
import '../styles/MobileNavbar.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ mobileMenu, toggleMobileMenu }) => {
  return (
    <>
      <div className="mobile-navbar-container">
        <div className="navbar">
          <nav>
            <Link to="/about" className="home-page">
              James
              <br />
              Andrews
            </Link>
          </nav>
        </div>

        <div className="social-container">
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://www.linkedin.com/in/james-andrews-b513b2253/"
          >
            <img
              className="linkedin-logo"
              src={require('../media/Linkedin.png')}
              alt="LinkedIn"
            />
          </Link>
        </div>

        <div>
          <Hamburger
            toggled={mobileMenu}
            toggle={toggleMobileMenu}
            size={30}
            color="black"
            duration={0.3}
          />
        </div>
      </div>

      {mobileMenu && (
        <div className="modal-overlay" onClick={toggleMobileMenu}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <nav>
              <Link
                to="/about"
                className="menu-item"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/resume"
                className="menu-item"
                onClick={toggleMobileMenu}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="menu-item"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

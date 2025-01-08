import React from 'react';
import '../styles/MobileNavbar.css';
import Socials from './Socials.jsx';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ mobileMenu, toggleMobileMenu }) => {
  return (
    <>
      <div className="mobile-navbar-container">
        <header onClick={mobileMenu ? toggleMobileMenu : null}>
          <Link to="/about" className="home-page">
            James
            <br />
            Andrews
          </Link>
        </header>

        <div className="social-hamburger-container">
          <Socials />

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
        <nav className="modal-container" onClick={toggleMobileMenu}>
          <Link to="/about" className="menu-item">
            <div className="line-animation">About</div>
          </Link>
          <Link to="/resume" className="menu-item">
            <div className="line-animation">Resume</div>
          </Link>
          <Link to="/contact" className="menu-item">
            <div className="line-animation">Contact</div>
          </Link>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;

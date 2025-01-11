import React from 'react';
import '../styles/DesktopNavbar.css';
import Socials from './Socials';
import { Link, useLocation } from 'react-router-dom';

const DesktopNavbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="desktop-navbar-boundary"></div>
      <div className="desktop-navbar">
        <div>
          <header>
            <Link
              to="/about"
              className={
                location.pathname === '/about'
                  ? 'desktop-home-page active'
                  : 'desktop-home-page'
              }
            >
              James
              <br />
              Andrews
            </Link>
          </header>
          <nav>
            <Link
              to="/about"
              className={
                location.pathname === '/about'
                  ? 'other-page active'
                  : 'other-page'
              }
            >
              <div className="line-animation">About</div>
            </Link>
            <Link
              to="/resume"
              className={
                location.pathname === '/resume'
                  ? 'other-page active'
                  : 'other-page'
              }
            >
              <div className="line-animation">Resume</div>
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === '/contact'
                  ? 'other-page active'
                  : 'other-page'
              }
            >
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

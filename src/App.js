import React, { useState, useEffect } from 'react';
import './styles/App.css';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Watch for screen resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`app ${isMobile ? 'mobile' : 'desktop'}`}>
      {isMobile ? (
        <MobileNavbar
          mobileMenu={mobileMenu}
          toggleMobileMenu={toggleMobileMenu}
        />
      ) : (
        <DesktopNavbar />
      )}

      <div className={`pages-container ${isMobile ? 'mobile' : 'desktop'}`}>
        {!mobileMenu && (
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace={true} />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/Socials.css';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className="socials-container">
      <Link target="_blank" rel="noreferrer" to="https://github.com/jcandrews2">
        <FaGithub className="github-image" />
      </Link>

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
  );
};

export default Socials;

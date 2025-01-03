import React from 'react';
import { Link } from 'react-router-dom';

const LinkedIn = () => {
  return (
    <div className="footer">
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

export default LinkedIn;

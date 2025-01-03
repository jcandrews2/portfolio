import { Link } from 'react-router-dom';
import LineAnimation from './LineAnimation';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/about" className="home-page">
          James
          <br />
          Andrews
        </Link>
        <ul>
          <li>
            <div className="page-container">
              <Link to="/about" className="other-page">
                About
              </Link>
              <LineAnimation />
            </div>
          </li>
          <li>
            <div className="page-container">
              <Link to="/resume" className="other-page">
                Resume
              </Link>
              <LineAnimation />
            </div>
          </li>
          <li>
            <div className="page-container">
              <Link to="/contact" className="other-page">
                Contact
              </Link>
              <LineAnimation />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

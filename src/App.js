import './styles/App.css';
import './styles/Navbar.css';
import './styles/About.css';
import './styles/LinkedIn.css';
import './styles/Contact.css';
import './styles/Resume.css';
import './styles/IconRenderer.css';
import './styles/LineAnimation.css';
import './styles/ArtGallery.css';
import './styles/Resume.css';
import './styles/ProjectCard.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import LinkedIn from './components/LinkedIn';
import Contact from './components/Contact';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <Navbar />
        <LinkedIn />
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace={true} />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

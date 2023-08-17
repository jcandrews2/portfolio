import "./styles/App.css";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Footer.css";
import "./styles/Contact.css";
import "./styles/Resume.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="left">
        <Navbar />
        <Footer />
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="./devlogo.svg" alt="Your-Dev-Friend" />
          Your-Dev-Friend
        </div>
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* <Link to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </Link> */}
        <Link to="/services" onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <Link to="/solutions" onClick={() => setIsOpen(false)}>
          Solutions
        </Link>
        {/* <Link to="/case-studies" onClick={() => setIsOpen(false)}>
          Case Studies
        </Link> */}
        <Link to="/testimonials" onClick={() => setIsOpen(false)}>
          Testimonials
        </Link>
        {/* <Link to="/portfolio" onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
        <Link to="/process" onClick={() => setIsOpen(false)}>
          Process
        </Link> */}
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

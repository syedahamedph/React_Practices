import React, { useState } from "react";


import { Link, useLocation } from "react-router-dom";
import "../CssFiles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          TUTORIALbySyed
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/java" 
            className={`nav-link ${location.pathname === '/java' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Java
          </Link>
          <Link 
            to="/python" 
            className={`nav-link ${location.pathname === '/python' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Python
          </Link>
          <Link 
            to="/sql" 
            className={`nav-link ${location.pathname === '/sql' ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            SQL
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

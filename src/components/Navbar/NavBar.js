import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
         <p className='p'>MovieExpo</p>
        </Link>
      </div>
     
    </nav>
  );
}

export default Navbar;

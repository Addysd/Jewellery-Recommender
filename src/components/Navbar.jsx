// src/components/Navbar.jsx

import React from 'react';
import './navbar.css'; // Ensure correct path to navbar.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My Jewellery Recommender</div>
      <ul className="navbar-links">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">Products</a></li>
        <li><a href="#" className="navbar-link">About</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;

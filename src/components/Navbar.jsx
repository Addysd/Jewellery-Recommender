// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Jewellery-Recommender Myntra</div>
        <ul className="flex space-x-4">
          <li><a href="#products" className="hover:text-gray-300">Products</a></li>
          <li><a href="#upload" className="hover:text-gray-300">Upload</a></li>
          <li><a href="#feedback" className="hover:text-gray-300">Feedback</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

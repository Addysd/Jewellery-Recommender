// src/components/Navbar.jsx

import React, { useState } from 'react';
import myntraLogo from '../assets/myntra-logo.png'; 

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={myntraLogo}
            alt="Myntra Logo"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="text-xl font-bold">Jewellery-Recommender Myntra</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#products"
              className={`hover:text-gray-300 ${activeButton === 'products' ? 'bg-black text-white' : ''} px-3 py-2 rounded`}
              onClick={() => handleButtonClick('products')}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#upload"
              className={`hover:text-gray-300 ${activeButton === 'upload' ? 'bg-black text-white' : ''} px-3 py-2 rounded`}
              onClick={() => handleButtonClick('upload')}
            >
              Upload
            </a>
          </li>
          <li>
            <a
              href="#feedback"
              className={`hover:text-gray-300 ${activeButton === 'feedback' ? 'bg-black text-white' : ''} px-3 py-2 rounded`}
              onClick={() => handleButtonClick('feedback')}
            >
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

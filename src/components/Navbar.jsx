import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import FaBars for sidebar icon
import myntraLogo from '../assets/myntra-logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.myntra.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img
              src={myntraLogo}
              alt="Myntra Logo"
              className="w-12 h-10 rounded-full mr-2"
            />
            <div className="text-xl font-bold">JewelVue Myntra</div>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/products" className={`hover:text-gray-300 px-3 py-2 rounded ${location.pathname === '/products' ? 'bg-black text-white' : ''}`}>
            Products
          </Link>
          <Link to="/" className={`hover:text-gray-300 px-3 py-2 rounded ${location.pathname === '/' ? 'bg-black text-white' : ''}`}>
            Upload
          </Link>
          <Link to="/feedback" className={`hover:text-gray-300 px-3 py-2 rounded ${location.pathname === '/feedback' ? 'bg-black text-white' : ''}`}>
            Feedback
          </Link>
        </div>
        <div className="md:hidden">
          <FaBars onClick={toggleSidebar} className="cursor-pointer" />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transition-transform transform"
          style={{ width: '70%' }}
        >
          <div className="flex flex-col space-y-2 mt-4 p-4 bg-blue-700 h-full">
            <button onClick={toggleSidebar} className="self-end mb-4">
              Close
            </button>
            <Link to="/products" className="bg-blue-700 px-3 py-2 rounded" onClick={toggleSidebar}>
              Products
            </Link>
            <Link to="/" className="bg-blue-700 px-3 py-2 rounded" onClick={toggleSidebar}>
              Upload
            </Link>
            <Link to="/feedback" className="bg-blue-700 px-3 py-2 rounded" onClick={toggleSidebar}>
              Feedback
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

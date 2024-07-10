// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import myntraLogo from '../assets/myntra-logo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={myntraLogo}
              alt="Myntra Logo"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="text-2xl font-bold">Jewellery-Recommender Myntra</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
            >
              Upload
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
            >
              Feedback
            </NavLink>
          </div>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            Menu
          </button>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;

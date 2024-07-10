// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="bg-blue-700 h-full p-4">
        <button className="text-white mb-4" onClick={toggleSidebar}>Close</button>
        <ul className="flex flex-col space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
              onClick={toggleSidebar}
            >
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
              onClick={toggleSidebar}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-black text-white' : 'hover:bg-blue-600 transition'}`
              }
              onClick={toggleSidebar}
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

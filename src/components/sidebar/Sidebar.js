// src/components/sidebar/Sidebar.js
import React from 'react';
import './sidebar.css';
import { useSidebar } from '../../context/SidebarContext'; // Importer le hook

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar(); // Utiliser le hook pour accéder à l'état

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle">
        <button className="close-btn" onClick={closeSidebar}>X</button>
      </div>
      <nav className={`sidebar-nav ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

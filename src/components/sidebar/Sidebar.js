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
      <div className="sidebar-logo">

      </div>
      <div className="sidebar-menu">
        
      </div>
    </div>
  );
};

export default Sidebar;

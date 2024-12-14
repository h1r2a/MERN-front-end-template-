// src/components/header/Header.js
import React from 'react';
import './header.css';
import { useSidebar } from '../../context/SidebarContext'; // Importer le hook

const Header = () => {
  const { toggleSidebar } = useSidebar(); // Utiliser le hook pour accéder à la fonction de basculement

  return (
    <header className="header">
      <div className="burger-menu">
        <button className="burger-btn" onClick={toggleSidebar}>☰</button>
      </div>
      <div className="logo">
        <h1 className="logo-title">HarenA</h1>
      </div>
    </header>
  );
};

export default Header;

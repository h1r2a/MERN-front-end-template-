// src/App.js
import React from 'react';
import './App.css';
import { SidebarProvider } from './context/SidebarContext'; // Importer le SidebarProvider
import Header from './components/header/Header'; 
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <SidebarProvider>
      <div className="main">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-content">
          <Sidebar />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;

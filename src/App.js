// src/App.js
import React from 'react';
import './App.css';
import { SidebarProvider } from './context/SidebarContext'; // Importer le SidebarProvider
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="main">
          <div className="header-container">
            <Header />
          </div>
          <div className="main-content">
            <Sidebar />
          </div>
        </div>
      </SidebarProvider></BrowserRouter>
  );
};

export default App;

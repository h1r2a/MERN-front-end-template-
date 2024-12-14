// src/context/SidebarContext.js
import React, { createContext, useContext, useState } from 'react';

// Crée le contexte
const SidebarContext = createContext();

// Crée un provider pour la sidebar
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fonction pour ouvrir ou fermer la sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fonction pour fermer la sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useSidebar = () => useContext(SidebarContext);

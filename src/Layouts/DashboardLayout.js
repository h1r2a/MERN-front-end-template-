// src/layouts/dashboardlayout.js
import React from "react";
import { Outlet } from "react-router-dom"; // Pour afficher les sous-routes
import "./dashboardlayout.css"; // Styles spécifiques au layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <header>
        <h2>Dashboard Header</h2>
      </header>
      <nav>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/dashboard/actions">Actions</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
        </ul>
      </nav>
      <main>
        <Outlet /> {/* Affiche les sous-routes ici */}
      </main>
    </div>
  );
};

export default DashboardLayout;

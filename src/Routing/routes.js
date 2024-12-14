// src/routing/routes.js
import Dashboard from "../pages/dashboard/Dashboard";
import Blank from "../pages/blank/Blank";
import DashboardLayout from "../Layouts/DashboardLayout";; // Pour le layout de Dashboard

const routes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Layout pour la route Dashboard
    children: [
      { path: "", element: <Dashboard /> }, // Page principale du Dashboard
    ],
  },
  {
    path: "/blank",
    element: <Blank />, // Route pour la page Blank
  },
];

export default routes;

import { FaTachometerAlt, FaRegFileAlt, FaCogs } from "react-icons/fa"; // Example icons from react-icons
import Dashboard from "../pages/dashboard/Dashboard";
import Blank from "../pages/blank/Blank";
import DashboardLayout from "../Layouts/DashboardLayout"; // For the Dashboard layout

const routes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Layout for the Dashboard route
    icon: <FaTachometerAlt />, // Icon for Dashboard
    label: "Dashboard", // Label displayed in the menu
    children: [
      { 
        path: "", 
        element: <Dashboard />, // Main Dashboard page
        icon: <FaCogs />, // Icon for the Dashboard child route
        label: "Dashboard Child" // Label for the Dashboard child route
      }
    ],
  },
  
  {
    path: "/blank",
    element: <Blank />, // Route for the Blank page
    icon: <FaRegFileAlt />, // Icon for Blank
    label: "Blank Page", // Label displayed in the menu
  },
];

export default routes;

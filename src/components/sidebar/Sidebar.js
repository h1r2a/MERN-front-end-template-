import React, { useState } from 'react';
import './sidebar.css';
import { useSidebar } from '../../context/SidebarContext'; // Import the hook
import routes from '../../Routing/routes';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Add icons for the dropdown
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar(); // Using the hook to access the state
  const [openDropdown, setOpenDropdown] = useState(null); // Handle dropdown opening
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current location

  // Function to handle the click on a nav item
  const handleNavClick = (path) => {
    navigate(path); // Navigate to the clicked path
    setOpenDropdown(null); // Close the dropdown after a route is clicked
    closeSidebar(); // Optionally close the sidebar when a route is clicked
  };

  // Function to toggle the dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the dropdown
  };

  // Function to check if a route or its children are active
  const isActive = (path, children) => {
    if (location.pathname === path) return true; // Check if the parent is active
    if (children) {
      return children.some((child) => location.pathname === child.path); // Check if any child route is active
    }
    return false;
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle">
        <button className="close-btn" onClick={closeSidebar}>X</button>
      </div>
      <div className="sidebar-logo">
        <h1>My Logo</h1>
      </div>
      <div className="sidebar-menu">
        {routes.map((route, index) => (
          <div key={index}>
            <div
              className={`nav-item ${isActive(route.path, route.children) ? 'active' : ''}`}
              onClick={() => handleNavClick(route.path)} // Handle route click
            >
              <div className="nav-icon">{route.icon}</div>
              <div className="nav-label">{route.label}</div>

              {/* Icon for dropdown, toggle only when clicked */}
              {route.children && (
                <div
                  className="dropdown-icon"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from triggering the parent navigation
                    toggleDropdown(index); // Toggle dropdown on click of the icon
                  }}
                >
                  {openDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              )}
            </div>

            {/* Show dropdown if this route has children and is open */}
            {route.children && openDropdown === index && (
              <div className="dropdown">
                {route.children.map((child, childIndex) => (
                  <div
                    className={`nav-item ${isActive(child.path) ? 'active' : ''}`}
                    key={childIndex}
                    onClick={() => handleNavClick(child.path)} // Handle child route click
                  >
                    <div className="nav-icon">{child.icon}</div>
                    <div className="nav-label">{child.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

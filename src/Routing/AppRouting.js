// src/routing/AppRouter.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes"; // Import des routes

const renderRoutes = (routes) => {
  return routes.map(({ path, element, children }, index) => {
    if (children) {
      return (
        <Route key={index} path={path} element={element}>
          {renderRoutes(children)} {/* Affichage des sous-routes */}
        </Route>
      );
    }
    return <Route key={index} path={path} element={element} />;
  });
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes> {/* Rendu des routes */}
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import About from "../pages/About";
// import Login from "../features/auth/pages/Login";
// import Dashboard from "../features/admin/pages/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> */}
      {/* Protected (Authenticated) Routes */}
      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;

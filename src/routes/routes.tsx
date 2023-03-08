import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../page/dashboard/Dashboard";
import HomePage from "../page/homepage/HomePage";
import RegisterPage from "../page/registerpage/RegisterPage";
import LoginPage from "../page/loginpage/LoginPage";
import NotFoundPage from "../page/notfoundpage/NotFoundPage";
import ProtectRoutes from "../page/protectRoutes/ProtectRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectRoutes />} >
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;

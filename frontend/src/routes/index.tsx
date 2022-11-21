import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import RegisterUser from "../pages/RegisterUser";
import RegisterSchedule from "../pages/RegisterSchedule";
import RegisterContact from "../pages/RegisterContact";
import RegisterProject from "../pages/RegisterProject";
import ListSchedule from "../pages/ListSchedule";
import ListContact from "../pages/ListContact";
import ListProjects from "../pages/ListProjects";
import React from "react";

interface PrivateProps {
  children?: React.ReactNode | any;
}

const Private = ({ children }: PrivateProps) => {
  let prop = children;
  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    prop = <Navigate to="/login" />;
  }

  return prop ?? <React.Fragment />;
};

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code" element={<ForgotPassword variant="code" />} />
      <Route path="/register-user" element={<RegisterUser />} />
      <Route path="/register-schedule" element={<RegisterSchedule />} />
      <Route path="/register-contact" element={<RegisterContact />} />
      <Route path="/register-project" element={<RegisterProject />} />
      <Route path="/list-schedule" element={<ListSchedule />} />
      <Route path="/list-contact" element={<ListContact />} />
      <Route path="/list-projects" element={<ListProjects />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

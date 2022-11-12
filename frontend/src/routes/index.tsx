import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import RegisterUser from "../pages/RegisterUser";
import RegisterSchedule from "../pages/RegisterSchedule";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code" element={<ForgotPassword variant="code" />} />
      <Route path="/register-user" element={<RegisterUser />} />
      <Route path="/register-schedule" element={<RegisterSchedule />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

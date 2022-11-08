import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

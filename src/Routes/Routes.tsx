import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Login/Login";
import PrivateRoute from "../components/PrivateRoutes";

const Routez = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />} />
      </Routes>
    </Router>
  );
};

export default Routez;

import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "../components/auth";
import Home from "../pages/Home/Home";

const PrivateRoute = () => {
  return <>{isAuth() ? <Home /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;

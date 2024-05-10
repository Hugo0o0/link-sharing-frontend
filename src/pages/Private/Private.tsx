import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Private;

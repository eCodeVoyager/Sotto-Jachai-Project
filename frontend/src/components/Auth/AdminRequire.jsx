import { Outlet, Navigate, useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import { routes } from "@/router/routes.data";

const AdminRequire = () => {
  const role = Cookie.get("role");
  const location = useLocation();
  return role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={routes.dashboard} replace state={{ from: location }} />
  );
};
export default AdminRequire;

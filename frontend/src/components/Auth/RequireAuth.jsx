import { Outlet, Navigate, useLocation } from "react-router-dom";
import Cookie from "js-cookie";
import { routes } from "../../router/routes.data";
const RequireAuth = () => {
  const token = Cookie.get("token");
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={routes.login} replace state={{ from: location }} />
  );
};
export default RequireAuth;

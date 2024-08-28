import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { routes } from "./router/routes.data";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/Auth/RequireAuth";
import Register from "./pages/Register";
import Verification from "./pages/Verification";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          {/* ==============
              public routes
              ============= */}
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.verification} element={<Verification />} />
          {/*==============
           protected routes
          ============== */}

          <Route element={<RequireAuth />}>
            <Route path={routes.dashboard} element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { routes } from "./router/routes.data";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/Auth/RequireAuth";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import DashBoardLayout from "./components/Layouts/DashBoardLayout";
import ContentSubmission from "./pages/ContentSubmission";
import MyContents from "./pages/MyContents";
import AdminLogin from "./pages/AdminLogin";
import AdminRequire from "./components/Auth/AdminRequire";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAllContents from "./pages/Admin/AdminAllContents";
import AdminRegister from "./pages/AdminRegister";

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
          <Route path={routes.adminRegister} element={<AdminRegister />} />
          <Route path={routes.adminLogin} element={<AdminLogin />} />
          <Route path={routes.verification} element={<Verification />} />
          {/*==============
           protected routes
          ============== */}

          <Route element={<RequireAuth />}>
            {/* dashboard routes start */}
            <Route element={<DashBoardLayout />}>
              <Route path={routes.dashboard} element={<Dashboard />} />
              <Route
                path={routes.contentSubmission}
                element={<ContentSubmission />}
              />
              <Route path={routes.myContent} element={<MyContents />} />
              {/* admin require routes */}
              <Route element={<AdminRequire />}>
                <Route
                  path={routes.adminDashboard}
                  element={<AdminDashboard />}
                />
                <Route
                  path={routes.adminAllContent}
                  element={<AdminAllContents />}
                />
              </Route>
            </Route>
            {/* dashboard routes end */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;

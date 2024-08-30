import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const BasicLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default BasicLayout;

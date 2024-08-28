import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const DashBoardLayout = () => {
  return (
    <>
      <section className="flex gap-4">
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
};
export default DashBoardLayout;

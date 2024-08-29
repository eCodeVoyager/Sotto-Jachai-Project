import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const DashBoardLayout = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row md:pe-4 md:py-5 min-h-screen ">
        <aside className="md:px-5 flex items-center ">
          <Sidebar />
        </aside>
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default DashBoardLayout;

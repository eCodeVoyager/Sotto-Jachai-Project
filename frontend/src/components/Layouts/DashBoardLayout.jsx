import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const DashBoardLayout = () => {
  return (
    <>
      <main className="flex md:pe-4">
        <Sidebar />
        <div className="w-full *:ps-4 *:h-full *:overflow-y-auto py-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default DashBoardLayout;

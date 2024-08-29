import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";

const DashBoardLayout = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row md:pe-4 md:py-5 h-screen ">
        <aside className="md:px-5 flex items-center md:h-full ">
          <Sidebar />
        </aside>
        <div className="w-full max-w-7xl mx-auto h-full overflow-y-auto scrollBarHidden">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default DashBoardLayout;

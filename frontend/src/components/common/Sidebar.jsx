import { navigation } from "@/router/routes.data";
import { NavLink } from "react-router-dom";
const userInfo = {
  name: "MD Salman Farshi",
  profile: "/profile.jpg",
  profession: "Software Engineer",
};
const Sidebar = () => {
  return (
    <>
      {/* sidebar */}

      <aside className="w-64 min-h-screen bg-gray-200 overflow-y-auto ">
        <div className="py-3">
          {/* profile info */}
          <div className="flex flex-col items-center">
            <figure className="size-36 border rounded-full border-gray-500 flex items-center justify-center bg-slate-500 text-slate-100">
              {/* FIX: logo will here                     */}
              <h5 className="text-4xl font-extralight text-center">
                Sotto <span>Jacai</span>
              </h5>
            </figure>
            <div className="text-center mt-4">
              <h2 className="font-medium text-gray-900 text-xl">
                {userInfo.name}
              </h2>
              {userInfo.profession && (
                <h4 className="font-medium text-base text-gray-600">
                  {userInfo.profession}
                </h4>
              )}
            </div>
          </div>
          {/* navigation */}
          <ul className="mt-3 md:mt-6 flex flex-col gap-4 items-center">
            {navigation.map((nav) => (
              <li key={nav.id} className="w-full px-2">
                <NavLink
                  to={nav.href}
                  className="block rounded-lg duration-150 py-2 ps-10 font-medium text-base text-gray-900 hover:bg-gray-300 hover:text-gray-900"
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;

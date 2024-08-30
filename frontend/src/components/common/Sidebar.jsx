import { adminNavigation, routes, userNavigation } from "@/router/routes.data";
import { Link, NavLink } from "react-router-dom";
import profile_icon_sidebar from "@/assets/icons/profile_icon_sidebar.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Logs } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { logout } from "@/redux/app/auth/authSlice";
import Cookie from "js-cookie";
const Sidebar = () => {
  const { user: userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation =
    userInfo.role === "admin" ? adminNavigation : userNavigation;

  const handleLogOut = () => {
    dispatch(logout());
    Cookie.remove("token");
    Cookie.remove("role");
  };
  return (
    <>
      <div className="w-full md:w-64 h-full bg-custom-50 overflow-y-auto md:rounded-2xl py-4 flex items-center justify-between md:items-stretch md:justify-normal md:flex-col px-4 md:px-0">
        <figure className="shrink-0">
          <Link to={routes.verification}>
            <img
              className="mx-auto w-[150px] md:w-[200px]"
              src="/images/logo.svg"
              alt="sotto-jacai_logo"
            />
          </Link>
        </figure>
        {/* navigation */}
        <div className="flex-1 md:flex items-center w-full hidden">
          <ul className="w-full px-2 space-y-3">
            {navigation.map((nav) => (
              <li key={nav.id} className="group">
                <NavLink
                  to={nav.href}
                  className="flex items-center gap-4   px-4 py-3 rounded-sm hover:bg-custom-100 duration-150"
                >
                  {<nav.icon className="group-hover:fill-white duration-150" />}
                  <span className="font-openSans font-semibold text-text group-hover:text-[#EDEEEE] duration-150">
                    {nav.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-30 hidden md:flex items-start flex-col gap-y-4 ps-2">
          <div className="flex justify-center gap-3">
            <figure>
              <img src={profile_icon_sidebar} alt="profile_icon_sidebar" />
            </figure>
            <div>
              <h2 className="text-gray-700 font-semibold ">{userInfo.name}</h2>
              <h4 className="text-muted-foreground text-sm">
                {userInfo.email}
              </h4>
            </div>
          </div>
          <Button onClick={handleLogOut} className="gap-2 mx-auto">
            <LogOut />
            <p>Logout</p>
          </Button>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Logs />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="*:cursor-pointer shadow-md text-xl">
              <div>
                <DropdownMenuLabel>{userInfo.name}</DropdownMenuLabel>
                <p className="text-xs font-medium">{userInfo.email}</p>
              </div>
              <DropdownMenuSeparator />
              {navigation.map((nav) => (
                <DropdownMenuItem key={nav.id} asChild>
                  <Link to={nav.href} className="flex items-center gap-4">
                    {<nav.icon />}
                    <span>{nav.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={handleLogOut}
                  variant="ghost"
                  className="gap-3 p-0"
                >
                  <LogOut className="size-4" />
                  <p>Logout</p>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
export default Sidebar;

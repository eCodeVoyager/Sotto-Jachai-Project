import { DashboardIcon, MyContentsIcon } from "@/components/common/Icons";

export const routes = {
  dashboard: "/",
  contentSubmission: "/mycontent/content-submission",
  myContent: "/mycontent",
  login: "/login",
  register: "/register",
  adminLogin: "/admin-login",
  verification: "/verification",
  adminAllContent: "/admin/allcontent",
  adminDashboard: "/admin/dashboard",
};

// dashboard navigation

export const userNavigation = [
  {
    id: "1",
    title: "Dashboard",
    href: routes.dashboard,
    icon: DashboardIcon,
  },
  {
    id: "4",
    title: "My Contents",
    href: routes.myContent,
    icon: MyContentsIcon,
  },
];
export const adminNavigation = [
  {
    id: "1",
    title: "Dashboard",
    href: routes.adminDashboard,
    icon: DashboardIcon,
  },
  {
    id: "4",
    title: "All Contents",
    href: routes.adminAllContent,
    icon: MyContentsIcon,
  },
];

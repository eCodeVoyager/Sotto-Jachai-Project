import { DashboardIcon, MyContentsIcon } from "@/components/common/Icons";

export const routes = {
  dashboard: "/",
  contentSubmission: "/content-submission",
  myContent: "/mycontent",
  login: "/login",
  register: "/register",
  adminLogin: "/admin/login",
  adminRegister: "/admin/register",
  verification: "/verification",
  adminAllContent: "/admin/allcontent",
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
  {
    id: "6",
    title: "Create new content",
    href: routes.contentSubmission,
    icon: MyContentsIcon,
  },
];
export const adminNavigation = [
  {
    id: "1",
    title: "Dashboard",
    href: routes.dashboard,
    icon: DashboardIcon,
  },
  {
    id: "4",
    title: "All Contents",
    href: routes.adminAllContent,
    icon: MyContentsIcon,
  },
];

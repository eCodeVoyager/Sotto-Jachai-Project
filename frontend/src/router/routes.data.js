import { DashboardIcon, MyContentsIcon } from "@/components/common/Icons";

export const routes = {
  dashboard: "/",
  contentSubmission: "/content-submission",
  myContent: "/mycontent",
  myProfile: "/myprofile",
  login: "/login",
  register: "/register",
  adminLogin: "/admin-login",
  verification: "/verification",
};

// dashboard navigation

export const navigation = [
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

import Container from "@/components/common/Container";
import { routes } from "@/router/routes.data";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const navData = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "#",
  },
  {
    id: 4,
    title: "Contact",
    href: "#",
  },
];
const Navbar = () => {
  return (
    <nav className="py-4 border-b border-b-gray-800">
      <Container>
        <div className="flex items-center flex-col sm:flex-row gap-y-3">
          <figure className="shrink-0">
            <Link to={routes.verification}>
              <img
                className="w-auto"
                src="/images/logo.svg"
                alt="sotto-jacai"
              />
            </Link>
          </figure>
          <div className="flex items-center justify-between flex-1">
            <ul className="flex items-center ml-auto md:mx-auto gap-5 md:gap-7 font-medium text-gray-900 text-base">
              {navData.map((item) => (
                <li key={item.id}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <div>
              {!Cookie.get("token") ? (
                <Link
                  to={routes.register}
                  className={"ml-5 font-medium text-gray-900 text-base"}
                >
                  Register
                </Link>
              ) : (
                <Link
                  to={routes.dashboard}
                  className={"ml-5 font-medium text-gray-900 text-base"}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;

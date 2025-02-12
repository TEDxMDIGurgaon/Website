import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-600"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <span className="self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-white">
            <span className="text-red-500"> TEDx</span>MDIGurgaon
          </span>
        </NavLink>
        <div className="flex gap-x-4"></div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsors"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Our Sponsors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/past-events"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Event 4.0
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                to="#footer"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Contact Us
              </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarComponent;

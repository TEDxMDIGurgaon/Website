import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black fixed w-full z-20 top-0 left-0 border-b border-gray-600"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <span className="self-center text-sm md:text-2xl font-semibold whitespace-nowrap text-white">
            <span className="text-red-500"> TEDx</span>MDIGurgaon
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />} {/* Show X when open, Menu when closed */}
        </button>

        {/* Navbar Items */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400"
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
                    ? "block py-2 px-3 text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400"
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
                    ? "block py-2 px-3 text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400"
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
                    ? "block py-2 px-3 text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400"
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
                    ? "block py-2 px-3 text-white md:p-0 md:hover:text-gray-400"
                    : "block py-2 px-3 text-gray-400 md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-400"
                }
              >
                Team
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarComponent;

import React, { useContext, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";
import { apiCLient, LOGOUT_ROUTE } from "../../services/api";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  const handleLogout = async () => {
    await apiCLient.post(LOGOUT_ROUTE);
    sessionStorage.clear();
    localStorage.clear();
    console.log("Session storage cleared, user logged out");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 left-0 z-30 flex justify-between items-center px-6 py-4 bg-white dark:bg-zinc-800 shadow-md transition-colors">
      {/* Brand Name */}
      <NavLink
        to="/"
        className="text-4xl font-black font-samarkan dark:text-white"
      >
        MerCat
      </NavLink>

      {/* Hamburger Menu and Links */}
      <ul
        className={`absolute md:relative w-full md:w-auto bg-white dark:bg-zinc-800 md:bg-transparent top-20 md:top-auto left-0 md:left-auto flex flex-col md:flex-row md:items-center transition-all duration-500 ease-in-out ${
          showMenu ? "block" : "hidden md:flex"
        }`}
      >
        <NavLink
          to="/module"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`
          }
        >
          Modules
        </NavLink>
        <NavLink
          to="/video-module"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`
          }
        >
          Video
        </NavLink>
        <NavLink
          to="/certified"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`
          }
        >
          Certified
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/trading-chart"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            } hover:text-blue-500 dark:hover:text-blue-400 transition-colors`
          }
        >
          Papertrading
        </NavLink>

        {/* Logout and Profile Links (only visible on mobile) */}
        <li
          className="text-xl font-medium cursor-pointer text-red-500 px-6 py-2 md:hidden"
          onClick={handleLogout}
        >
          Logout
        </li>
        <li
          className="text-xl font-medium cursor-pointer text-red-500 px-6 py-2 md:hidden"
          onClick={() => navigate("/user-profile")}
        >
          Profile
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-full focus:outline-none transition-colors"
          aria-label="Toggle theme"
        >
          {themeMode === "light" ? (
            <FaSun className="text-yellow-400 w-6 h-6" />
          ) : (
            <FaMoon className="text-gray-700 dark:text-gray-300 w-6 h-6" />
          )}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="h-10 w-10 rounded-full"
            onClick={() => setShowDropdown((prev) => !prev)}
            aria-label="User Profile"
          >
            <CgProfile className="w-8 h-8 dark:text-white" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-600 shadow-lg rounded-md w-32">
              <button
                onClick={handleLogout}
                className="block w-full text-center text-xl px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300"
              >
                Log Out
              </button>
              <button
                onClick={() => navigate("/user-profile")}
                className="block w-full text-center text-xl px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300"
              >
                Profile
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="md:hidden block p-2"
        aria-label="Toggle menu"
      >
        <TiThMenu className="h-8 w-8 dark:text-white" />
      </button>
    </nav>
  );
};

export default Navbar;

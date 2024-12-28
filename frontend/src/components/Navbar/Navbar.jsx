import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    console.log("Session storage cleared, user logged out");
    navigate("/login");
  };

  return (
    <nav className=" sticky top-0 left-0 z-30 flex justify-between items-center px-6 py-4  bg-white shadow-md">
      {/* Brand Name */}
      <NavLink to="/" className="text-4xl font-black font-samarkan">
        MerCat
      </NavLink>

      {/* Desktop and Mobile Menu */}
      <ul
        className={`absolute md:relative w-full md:w-auto bg-white md:bg-transparent top-20 md:top-auto left-0 md:left-auto flex flex-col md:flex-row md:items-center transition-all duration-500 ease-in-out ${
          showMenu ? "block" : "hidden md:flex"
        }`}
      >
        <NavLink
          to="/module"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive ? "text-blue-700" : "text-gray-700"
            } hover:text-blue-500 transition-colors`
          }
        >
          Modules
        </NavLink>
        <NavLink
          to="/video-module"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive ? "text-blue-700" : "text-gray-700"
            } hover:text-blue-500 transition-colors`
          }
        >
          Video
        </NavLink>
        <NavLink
          to="/certified"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive ? "text-blue-700" : "text-gray-700"
            } hover:text-blue-500 transition-colors`
          }
        >
          Certified
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-xl font-medium px-6 py-2 md:px-4 md:py-0 cursor-pointer ${
              isActive ? "text-blue-700" : "text-gray-700"
            } hover:text-blue-500 transition-colors`
          }
        >
          Blogs
        </NavLink>
        {/* Logout for Mobile */}
        <li
          className="text-xl font-medium cursor-pointer text-red-500 px-6 py-2 md:hidden"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>

      {/* User Dropdown for Desktop */}
      <div className="relative hidden md:block">
        <button
          className="h-10 w-10 rounded-full"
          onClick={() => setShowDropdown((prev) => !prev)}
          aria-label="User menu"
        >
          <CgProfile className="w-8 h-8" />
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-32">
            <button
              onClick={handleLogout}
              className="block w-full text-center text-xl px-4 py-2 text-red-500 bg-[#ebac65] rounded-lg hover:bg-[#e59943] transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="md:hidden block p-2"
        aria-label="Toggle menu"
      >
        <TiThMenu className="h-8 w-8" />
      </button>
    </nav>
  );
};

export default Navbar;

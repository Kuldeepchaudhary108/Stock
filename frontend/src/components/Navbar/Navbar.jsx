import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    console.log("Session storage cleared, user logged out");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-6 relative">
      {/* {/* Brand Name *  /} */}
      <h1 className=" text-4xl font-black font-samarkan ">MerCat</h1>

      {/* Navigation Links */}
      <ul
        className={`   text-center w-full p-6  md:absoult md:left-[410px] md:flex md:justify-evenly md:p-1 md:w-[506px] transition-all duration-500 ${
          showMenu ? "top-[80px]" : "top-[-400px]"
        } md:top-6`}
      >
        <li
          className=" text-xl font-medium  cursor-pointer"
          onClick={() => navToHome()}
        >
          Modules
        </li>
        <li
          className=" text-xl font-medium  cursor-pointer"
          onClick={() => navToIntro()}
        >
          Video
        </li>
        <li
          className=" text-xl font-medium  cursor-pointer"
          onClick={() => navToVedas()}
        >
          Certified
        </li>
        <li
          className=" text-xl font-medium  cursor-pointer"
          onClick={() => navToQuiz()}
        >
          Blogs
        </li>
        <li
          className={`md:hidden  text-xl font-medium  cursor-pointers`}
          onClick={() => handleLogout()}
        >
          Logout
        </li>
        <li>
          <div className="relative">
            <button
              className="h-10 w-10 rounded-full hidden md:block"
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
        </li>
      </ul>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="md:hidden block p-2 absolute right-6"
        aria-label="Toggle menu"
      >
        <TiThMenu className="h-8 w-8" />
      </button>

      {/* User Avatar and Dropdown */}
    </nav>
  );
};

export default Navbar;

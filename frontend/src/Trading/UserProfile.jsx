import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice.js";

const UserProfile = () => {
  const { status } = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  if (!userData) {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      dispatch(authLogin(JSON.parse(storedUserData)));
    }
  }

  return (
    <div className=" p-6 max-w-4xl mx-auto mt-5 bg-white shadow-md rounded-lg dark:bg-zinc-800/70 dark:text-white">
      <div className=" flex items-center mb-6 gap-10">
        <img
          src="/elements/sun5.jpg"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            {userData.firstName}
          </h2>
          <p className="text-gray-600 dark:text-white">
            {" "}
            email:{userData.email}
          </p>
          <p className="text-gray-600 dark:text-white">
            {userData.firstName}: December 2024
          </p>
        </div>
      </div>

      {/* Trading Statistics */}
      <div className="trading-stats mb-6">
        <h3 className="text-xl font-semibold mb-4">Trading Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="stat bg-gray-100  dark:bg-zinc-500/40 p-4 rounded text-center">
            <p className="text-2xl font-bold dark:text-black">
              {userData.Account}
            </p>
            <p className="text-gray-600 dark:text-white">Total Balance</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded text-center dark:bg-zinc-500/40">
            <p className="text-2xl font-bold  dark:text-black ">₹25,000</p>
            <p className="text-gray-600  dark:text-white">Profit/Loss</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded text-center dark:bg-zinc-500/40">
            <p className="text-2xl font-bold dark:text-black">56</p>
            <p className="text-gray-600 dark:text-white">Total Trades</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded text-center dark:bg-zinc-500/40">
            <p className="text-2xl font-bold dark:text-black">101</p>
            <p className="text-gray-600 dark:text-white">Test Token</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <div className="settings flex flex-col gap-4">
          <div className="setting">
            <label className="block mb-1 text-gray-600 dark:text-white">
              Username
            </label>
            <input
              type="text"
              defaultValue={userData.username}
              className="w-full p-2 border rounded dark:text-black"
            />
          </div>
          <div className="setting">
            <label className="block mb-1 text-gray-600 dark:text-white">
              Email
            </label>
            <input
              type="email"
              defaultValue={userData.email}
              className="w-full p-2 border rounded dark:text-black"
            />
          </div>
          <div className="setting">
            <label className="block mb-1 text-gray-600 dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded dark:text-black"
            />
          </div>
        </div>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;

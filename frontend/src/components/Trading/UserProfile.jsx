import React from "react";
import { useSelector, useDispatch } from "react-redux";
const UserProfile = () => {
  const { status, userDate } = useSelector((state) => state.auth);

  return (
    <div className=" p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <div className=" flex items-center mb-6 gap-10">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
          <p className="text-gray-600">Joined: January 2024</p>
        </div>
      </div>

      {/* Trading Statistics */}
      <div className="trading-stats mb-6">
        <h3 className="text-xl font-semibold mb-4">Trading Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="stat bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">₹1,20,000</p>
            <p className="text-gray-600">Total Balance</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">₹25,000</p>
            <p className="text-gray-600">Profit/Loss</p>
          </div>
          <div className="stat bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">56</p>
            <p className="text-gray-600">Total Trades</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="account-settings">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <div className="settings flex flex-col gap-4">
          <div className="setting">
            <label className="block mb-1 text-gray-600">Username</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="setting">
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              defaultValue="johndoe@example.com"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="setting">
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-2 border rounded"
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

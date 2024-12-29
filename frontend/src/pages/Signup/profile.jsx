import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppStore } from "zustand";
// import { useAppStore } from "../store/store";
import { FaPlus, FaTrash } from "react-icons/fa";
import { colors, GetColor } from "../../utils/GetColor.jsx";
import { apiCLient, UPDATE_ROUTE } from "../../services/api.js";

export default function Profile() {
  const navigate = useNavigate();
  //   const { userInfo, setUserInfo } = useAppStore();
  const [color1, setColors] = useState(0);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [hovered, setHovered] = useState(false);

  const saveChange = async () => {
    // console.log("zustand userdata", userInfo);
    navigate("/");
 
    try {
      console.log(color1);
      const res = await apiCLient.patch(UPDATE_ROUTE, {
        firstName,
        surName,
        color1,
      });
      if (res.status === 200) {
        console.log("Update account details succefully ");
        // console.log("user data after update ", res.data);
        console.log("user data after update ", res.data._doc);
        // setUserInfo(res.data);
      }
    } catch (error) {
      console.log("error while updating to account details :", error);
    }
  };

  return (
    <div className="bg-gray-900/80 dark:bg-zinc-800 min-h-screen flex items-center justify-center p-6">
      <div className="bg-zinc-700 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-white text-center mb-8">
          Profile Settings
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-8">
          {/* Avatar Section */}
          <div
            className="relative group h-32 w-32 md:h-48 md:w-48 flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="h-full w-full rounded-full overflow-hidden">
              {image ? (
                <Avatar
                  src={image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div
                  className={`uppercase flex items-center justify-center text-xl md:text-3xl font-bold ${GetColor(
                    color1
                  )} h-full w-full rounded-full`}
                >
                  {firstName ? firstName.charAt(0) : ""}
                </div>
              )}
            </Avatar>
            {hovered && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                {image ? (
                  <FaTrash
                    className="text-white text-3xl cursor-pointer"
                    onClick={() => setImage(null)}
                  />
                ) : (
                  <FaPlus
                    className="text-white text-3xl cursor-pointer"
                    onClick={() => console.log("Add image logic")}
                  />
                )}
              </div>
            )}
          </div>

          {/* Form Section */}
          <div className="flex-1 text-white space-y-6">
            {/* <input
              type="email"
              value={userInfo.email || ""}
              disabled
              placeholder="Email"
              className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            /> */}
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              placeholder="Last Name"
              className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex items-center gap-4">
              {colors.map((colorClass, index) => (
                <div
                  key={index}
                  className={`${colorClass} h-8 w-8 rounded-full cursor-pointer ${
                    color1 === index ? "ring-2 ring-white" : ""
                  }`}
                  onClick={() => setColors(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={saveChange}
          className="mt-6 w-full py-4 bg-purple-600 hover:bg-purple-800 rounded-lg text-white text-lg font-medium transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

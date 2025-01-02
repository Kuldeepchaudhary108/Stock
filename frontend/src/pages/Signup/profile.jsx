import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";
import { colors, GetColor } from "../../utils/GetColor.jsx";
import { apiCLient, UPDATE_ROUTE, USER_ROUTE } from "../../services/api.js";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";

export default function Profile() {
  const navigate = useNavigate();
  const [color1, setColors] = useState(0);
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const disPatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  // useEffect(() => {
  //   if (userData) {
  //     localStorage.setItem("data", JSON.stringify(userData));
  //   }
  // }, [userData]);
  const saveChange = async () => {
    try {
      const res = await apiCLient.patch(UPDATE_ROUTE, {
        firstName,
        surName,
        color1,
        // image,
      });
      if (res.status === 200) {
        console.log("Account details updated successfully:", res.data._doc);
        const Data = await apiCLient.get(USER_ROUTE);
        console.log(Data);
        if (Data) {
          disPatch(authLogin(Data.data.user));
        }

        navigate("/");
      }

      console.log(userData);
    } catch (error) {
      console.log("Error updating account details:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="bg-zinc-800 p-8 rounded-lg shadow-2xl w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Profile Settings
        </h2>

        {/* Centered Avatar Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden shadow-lg bg-gray-700 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <div
                className={`flex items-center justify-center text-4xl font-bold uppercase ${GetColor(
                  color1
                )} h-full w-full`}
              >
                {firstName ? firstName.charAt(0) : ""}
              </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <label
                htmlFor="image-upload"
                className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-transform transform hover:scale-105"
              >
                {image ? "Change Image" : "Upload Image"}
              </label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </div>
          {image && (
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
              onClick={() => setImage(null)}
            >
              Remove Image
            </button>
          )}
        </div>

        {/* Form Section */}
        <div className="text-white space-y-6">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
          />
          <input
            type="text"
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
          />
          <div className="flex items-center gap-4">
            {colors.map((colorClass, index) => (
              <div
                key={index}
                className={`${colorClass} h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${
                  color1 === index ? "ring-4 ring-purple-500" : ""
                }`}
                onClick={() => setColors(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={saveChange}
          className="mt-6 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-lg font-medium transition-all shadow-lg transform hover:scale-105"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

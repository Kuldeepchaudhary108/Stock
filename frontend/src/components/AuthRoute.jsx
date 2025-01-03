import React from "react";
import { Navigate } from "react-router-dom";

import { getCookie } from "../utils/GetCookie";

export const AuthRoute = ({ children }) => {
  const accessToken = getCookie("accessToken");

  return accessToken ? <Navigate to="/login" /> : children;
};

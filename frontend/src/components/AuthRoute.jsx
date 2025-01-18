import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const storedUserData = localStorage.getItem("userData");

  return storedUserData ? <Navigate to="/login" /> : children;
};

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const storedUserData = localStorage.getItem("userData");

  return storedUserData ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

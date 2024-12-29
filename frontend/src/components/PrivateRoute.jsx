import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/GetCookie";

const PrivateRoute = ({ children }) => {
    const accessToken = getCookie("accessToken")

    return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute; 
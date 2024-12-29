import axios from "axios";

export const Host = "http://localhost:3000";
export const AUTH_ROUTE = "/api/v1/users";
export const SIGNUP_ROUTE = `${AUTH_ROUTE}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`;
export const LOGOUT_ROUTE = `${AUTH_ROUTE}/logout`;
export const UPDATE_ROUTE = `${AUTH_ROUTE}//update-userdetails`;
export const AVTAR_ROUTE = `${AUTH_ROUTE}/change/avatarImage`;
export const USER_ROUTE = `${AUTH_ROUTE}/current-user`;

export const apiCLient = axios.create({
  baseURL: Host,
  withCredentials: true,
});

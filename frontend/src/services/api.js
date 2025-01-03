import axios from "axios";

export const Host = "http://localhost:3000";
export const USER_ROUTE = "/api/v1/users";
// export const PORTFOLIO_ROUTE=""
export const TRADE_ROUTE = "/api/v1/stock";
export const SIGNUP_ROUTE = `${USER_ROUTE}/signup`;
export const LOGIN_ROUTE = `${USER_ROUTE}/login`;
export const LOGOUT_ROUTE = `${USER_ROUTE}/logout`;
export const UPDATE_ROUTE = `${USER_ROUTE}/update-userdetails`;
export const AVTAR_ROUTE = `${USER_ROUTE}/change/avatarImage`;
export const GET_USER_ROUTE = `${USER_ROUTE}/current-user`;

export const NEW_STOCK = `${TRADE_ROUTE}/newstocks`;
export const GET_STOCK = `${TRADE_ROUTE}/getstocks`;
export const GET_HOLDING = `${TRADE_ROUTE}/holding`;
export const GET_ORDER = `${TRADE_ROUTE}/order`;
export const SELL_ORDER = `${TRADE_ROUTE}/sell-stock`;
export const BUY_ORDER = `${TRADE_ROUTE}/BUY-stock`;

// export const UPDATE_STOCK_ROUTE=`${TRADE_ROUTE}  `

export const apiCLient = axios.create({
  baseURL: Host,
  withCredentials: true,
});

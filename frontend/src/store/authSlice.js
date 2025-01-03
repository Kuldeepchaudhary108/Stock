import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  symbol: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    setSymbol: (state, action) => {
      state.symbol = action.payload;
      localStorage.setItem("symbol", JSON.stringify(action.payload));
    },
  },
});
export const { login, logout, setSymbol } = authSlice.actions;
export default authSlice.reducer;

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  BlogList,
  HomePage,
  Login,
  Modules,
  Signup,
  TextModule,
  VarsityCertified,
  VideoLesson,
  VideoModule,
  Profile,
} from "./pages/index.js";
import {
  Dashboard,
  StockDetails,
  TradingHome,
  Transactions,
} from "./components/Trading/index.js";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/module" element={<Modules />} />
          <Route path="/module-text" element={<PrivateRoute><TextModule /></PrivateRoute>} />
          <Route path="/Video-module" element={<VideoModule />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/Video-lesson" element={<PrivateRoute><VideoLesson /></PrivateRoute>} />
          <Route path="/certified" element={<VarsityCertified />} />
          {/* <Route path="/trading-chart" element={<Trading />} /> */}

          <Route path="/trading-chart" element={<TradingHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock/:symbol" element={<StockDetails />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

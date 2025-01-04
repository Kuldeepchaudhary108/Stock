import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
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
  AdsPage,
} from "./pages/index.js";
import {
  Dashboard,
  Holding,
  // StockDetails,
  TradingHome,
  // Transactions,
  UserProfile,
} from "./Trading/index.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { AuthRoute } from "./components/AuthRoute.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/module" element={<Modules />} />
          <Route
            path="/module-text"
            element={
              <PrivateRoute>
                <TextModule />
              </PrivateRoute>
            }
          />
          <Route path="/Video-module" element={<VideoModule />} />
          <Route path="/blog" element={<BlogList />} />
          <Route
            path="/Video-lesson"
            element={
              <PrivateRoute>
                <VideoLesson />
              </PrivateRoute>
            }
          />
          <Route path="/certified" element={<VarsityCertified />} />
          {/* <Route path="/trading-chart" element={<Trading />} /> */}

          <Route path="/trading-chart" element={<TradingHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/holding" element={<Holding />} />
        </Route>
      </>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

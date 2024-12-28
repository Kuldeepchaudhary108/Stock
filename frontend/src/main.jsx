import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Signup from "./components/Signup.jsx";
import Layout from "./Layout.jsx";
import {
  BlogList,
  HomePage,
  Modules,
  TextModule,
  VarsityCertified,
  VideoLesson,
  VideoModule,
} from "./pages/index.js";
// import store from "./App/store.js";
// import Login from "./components/Login.jsx";
// import About from "./components/About.jsx";

function App() {
  // const [isAuthenticated, isUserAuthenticated] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route
          path="/login"
          element={<Login isUserAuthenticated={isUserAuthenticated} />}
        /> */}
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/module" element={<Modules />} />
          <Route path="/module-text" element={<TextModule />} />
          <Route path="/Video-module" element={<VideoModule />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/Video-lesson" element={<VideoLesson />} />
          <Route path="/certified" element={<VarsityCertified />} />
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

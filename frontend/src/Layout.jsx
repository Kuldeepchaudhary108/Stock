// App.js
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components/index.js";

function Layout() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
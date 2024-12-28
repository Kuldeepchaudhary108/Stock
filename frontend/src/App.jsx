// App.js
import React from "react";
import { Navbar, Footer } from "./components/index.js";
import { HomePage } from "./pages/index.js";
function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;

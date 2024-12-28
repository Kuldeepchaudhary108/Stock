import React from "react";
import { Link } from "react-router-dom";

const TradingHome = () => {
  return (
    <div className="home-page text-center mt-20 dark:text-white ">
      <h1 className="text-4xl font-bold">Welcome to Paper Trading</h1>
      <p className="mt-4 text-lg">Practice trading without real money!</p>
      <Link to="/dashboard">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default TradingHome;

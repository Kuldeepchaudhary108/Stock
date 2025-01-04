import React, { useState } from "react";
import { TradingViewChart } from "./TradingView";
import OrderPanel from "./OrderPanel";
import Holdings from "./Holding";
import TransactionHistory from "./TransactionHistory";

const Dashboard = () => {
  return (
    <div className="dashboard flex flex-col items-center bg-gray-50 dark:bg-zinc-900 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Trading Dashboard
      </h1>

      {/* Trading Chart */}
      <div className="w-full mb-6">
        <div className="bg-white rounded-lg shadow-lg">
          <TradingViewChart />
        </div>
      </div>

      {/* Panels */}
      <div className="w-full flex flex-col items-center space-y-6">
        <div className="w-11/12 flex flex-col md:flex-row md:justify-between md:space-x-6">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0 dark:bg-zinc-800/80">
            <OrderPanel />
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 dark:bg-zinc-800/80">
            <Holdings />
          </div>
        </div>

        {/* Transaction History */}
        <div className="w-11/12 bg-white rounded-lg shadow-lg p-6 dark:bg-zinc-800/80">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

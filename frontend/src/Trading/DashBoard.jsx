import React, { useState } from "react";
import TradingViewChart from "./TradingView";
import OrderPanel from "./OrderPanel";
import Portfolio from "./Portfolio";
import TransactionHistory from "./TransactionHistory";

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handlePlaceOrder = (order) => {
    const transaction = {
      ...order,
      symbol: "AAPL",
      time: new Date().toLocaleString(),
    };
    setTransactions((prev) => [...prev, transaction]);

    // Update portfolio logic here...
  };

  return (
    <div className="dashboard p-8 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Trading Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trading Chart */}
        <div className="col-span-2 lg:col-span-2 bg-white rounded-lg shadow-lg">
          <TradingViewChart />
        </div>

        {/* Order Panel and Portfolio */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
          <OrderPanel onPlaceOrder={handlePlaceOrder} />
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-lg p-6">
          <Portfolio portfolio={portfolio} />
        </div>

        {/* Transaction History */}
        <div className="col-span-1 lg:col-span-3 mt-6 bg-white rounded-lg shadow-lg p-6">
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

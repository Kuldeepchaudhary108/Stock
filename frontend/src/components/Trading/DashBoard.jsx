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
    <div className="dashboard grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        <TradingViewChart />
      </div>
      <div className="col-span-1">
        <OrderPanel onPlaceOrder={handlePlaceOrder} />
        <Portfolio portfolio={portfolio} />
      </div>
      <div className="col-span-3">
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;

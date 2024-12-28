import React, { useState } from "react";

const StockDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {
    alert(`Bought ${quantity} shares of ${match.params.symbol}`);
  };

  const handleSell = () => {
    alert(`Sold ${quantity} shares of ${match.params.symbol}`);
  };

  return (
    <div className="stock-details p-6">
      <h1 className="text-2xl font-bold">
        Stock Details: {match.params.symbol}
      </h1>
      <p className="mt-4 text-lg">Current Price: $150</p>
      <div className="mt-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border px-2 py-1"
          placeholder="Enter quantity"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleBuy}
          className="mr-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Buy
        </button>
        <button
          onClick={handleSell}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default StockDetails;

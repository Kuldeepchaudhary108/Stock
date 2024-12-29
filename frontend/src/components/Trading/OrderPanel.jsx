import React, { useState } from "react";

const OrderPanel = ({ onPlaceOrder }) => {
  const [orderType, setOrderType] = useState("buy");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const handleOrder = () => {
    onPlaceOrder({ type: orderType, quantity, price });
    setQuantity(1);
    setPrice("");
  };

  return (
    <div className="order-panel p-4 border rounded bg-gray-100 dark:bg-zinc-800/80 dark:text-white transition-colors">
      <h2 className="text-xl font-bold mb-4">Place Order</h2>
      <div className="mb-2">
        <label>Order Type:</label>
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="ml-2 p-1 border bg-white dark:bg-zinc-900/80 dark:border-zinc-700 dark:text-white"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div className="mb-2">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="ml-2 p-1 border bg-white dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
        />
      </div>
      <div className="mb-2">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="ml-2 p-1 border bg-white dark:bg-zinc-900 dark:border-zinc-700 dark:text-white"
        />
      </div>
      <button
        onClick={handleOrder}
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default OrderPanel;

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
    <div className="order-panel bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Place Order</h2>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Order Type:</label>
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        >
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleOrder}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
};

export default OrderPanel;

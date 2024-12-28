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
    <div className="order-panel p-4 border rounded bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Place Order</h2>
      <div className="mb-2">
        <label>Order Type:</label>
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="ml-2 p-1 border"
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
          className="ml-2 p-1 border"
        />
      </div>
      <div className="mb-2">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="ml-2 p-1 border"
        />
      </div>
      <button
        onClick={handleOrder}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default OrderPanel;

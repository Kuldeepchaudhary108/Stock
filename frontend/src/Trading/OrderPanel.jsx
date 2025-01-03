import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { setSymbol } from "../store/authSlice.js";
import axios from "axios";

const OrderPanel = () => {
  const [orderType, setOrderType] = useState("buy");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [companyName, setCompanyName] = useState("");

  const dispatch = useDispatch();
  const { symbol: tickerSymbol } = useSelector((state) => state.auth);

  console.log("check", tickerSymbol);

  // Fetch ticker symbol from localStorage on initial render if not in Redux
  useEffect(() => {
    if (!tickerSymbol) {
      const storedUserData = localStorage.getItem("symbol");
      console.log("check", storedUserData);

      if (storedUserData) {
        const parsedSymbol = JSON.parse(storedUserData);
        dispatch(setSymbol(parsedSymbol));
      }
    }
  }, [dispatch]);

  // Fetch company name based on ticker symbol
  useEffect(() => {
    if (tickerSymbol) {
      // Replace with your API call to fetch company data
      axios
        .get(`https://api.example.com/stock/${tickerSymbol}`)
        .then((response) => {
          setCompanyName(response.data.companyName); // Assuming the response contains company name
        })
        .catch((error) => {
          console.error("Error fetching company name", error);
        });
    }
  }, [tickerSymbol]);

  const handleOrder = async () => {
    // Implement the logic for handling the order submission
    if (!price || !quantity || !orderType) {
      alert("Please fill in all fields.");
      return;
    }
    // Make an API call or any other operation to submit the order
    console.log("Order submitted:", {
      orderType,
      quantity,
      price,
      tickerSymbol,
      companyName,
    });
  };

  return (
    <div className="order-panel bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Place Order</h2>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Ticker Symbol:</label>
        <input
          type="text"
          value={tickerSymbol}
          disabled // Make the symbol input field read-only as it's derived from Redux
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Company Name:</label>
        <input
          type="text"
          value={companyName}
          disabled // Make the company name read-only as it's fetched automatically
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
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
          min="1"
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
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

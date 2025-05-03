import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { symbol as stateSymbol } from "../../store/authSlice.js";
import {
  apiCLient,
  BUY_ORDER,
  GET_HOLDING,
  GET_STOCK,
  SELL_ORDER,
} from "../../services/api";

const OrderPanel = () => {
  const [orderType, setOrderType] = useState("buy");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [stockId, setStockId] = useState("");
  const [holdingId, setHoldingId] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const symbol = useSelector((state) => state.auth.symbol);

  const fetchStockDetails = useCallback(async () => {
    if (!symbol) return;

    try {
      const response = await apiCLient.get(GET_STOCK);
      const stock = response.data?.user;
      console.log("the stock details are follows :", stock);

      const matchingStock = stock.find((stock) => stock.symbol === symbol);

      if (matchingStock) {
        setCompanyName(matchingStock.companyName || "Unknown Company");
        setStockId(matchingStock._id);
        setPrice(matchingStock.currentPrice);

        const response = await apiCLient.get(GET_HOLDING);
        const holdingData = response.data?.user;

        const matchingStockId = holdingData.find(
          (stock) => stock.stock._id === matchingStock._id
        );

        if (matchingStockId) {
          setHoldingId(matchingStockId._id);
        } else {
          console.warn("User holding not found.");
        }

        console.log("Stock details fetched successfully:");
      } else {
        console.warn(
          "Symbol mismatch or stock details not found in the array."
        );
      }
    } catch (error) {
      console.error("Error while fetching stock details:", error.message);
      setError("Failed to fetch stock details. Please try again later.");
    }
  }, [symbol]);

  useEffect(() => {
    const storedSymbol = localStorage.getItem("symbol");
    if (!symbol && storedSymbol) {
      const parsedSymbol = JSON.parse(storedSymbol);
      dispatch(stateSymbol(parsedSymbol));
    }
  }, [symbol, dispatch]);

  useEffect(() => {
    fetchStockDetails();
  }, [fetchStockDetails]);

  const handleOrder = async () => {
    if (orderType === "buy") {
      try {
        const buyStock = await apiCLient.post(BUY_ORDER, {
          stock_id: stockId,
          quantity,
          buyPrice: price,
        });

        if (buyStock.status === 202) {
          alert("Stock added successfully");
          setPrice("");
          window.location.reload();
        }
      } catch (error) {
        setError("Failed to execute buy order.");
      }
    }
    if (orderType === "sell") {
      try {
        const sellStock = await apiCLient.post(SELL_ORDER, {
          holdingId,
          quantity,
        });

        if (sellStock.status === 202) {
          alert("Successfully sold your holding");
          setPrice("");
          window.location.reload();
        }
      } catch (error) {
        setError("Failed to execute sell order.");
      }
    }
  };

  return (
    <div className="order-panel bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Place Order</h2>
      {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Ticker Symbol:</label>
        <input
          type="text"
          value={symbol || ""}
          disabled
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-600">Company Name:</label>
        <input
          type="text"
          value={companyName}
          disabled
          className="w-full p-2 border border-gray-300  rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
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

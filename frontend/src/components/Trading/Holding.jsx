import React, { useState, useEffect } from "react";
import { apiCLient, GET_HOLDING, GET_USER_ROUTE } from "../../services/api";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [summary, setSummary] = useState({
    current: 0,
    invested: 0,
    totalReturns: 0,
    dayReturns: 0,
  });
  // const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const data = await apiCLient.get(GET_HOLDING);
        const userHoldings = data.data.user || [];

        // Calculate summary data
        const current = userHoldings.reduce(
          (sum, h) => sum + h.stock.currentPrice * h.quantity, // current value = current price * quantity
          0
        );
        const invested = userHoldings.reduce(
          (sum, h) => sum + h.buyPrice * h.quantity, // invested = buy price * quantity
          0
        );
        const totalReturns = current - invested; // totalReturns = current - invested
        const dayReturns = userHoldings.reduce(
          (sum, h) => sum + (h.stock.currentPrice - h.buyPrice) * h.quantity, // dayReturns = (current price - buy price) * quantity
          0
        );

        setSummary({
          current,
          invested,
          totalReturns,
          dayReturns,
        });

        setHoldings(userHoldings);

        const response = await apiCLient.get(GET_USER_ROUTE);
        // console.log(response);
        if (response && response.data && response.data.user) {
          const updatedData = response.data.user;
          updatedData.trades = userHoldings.length;
          updatedData.returns = totalReturns;

          // console.log("Fetched user data:", updatedData);
          dispatch(authLogin(updatedData));
        }
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchHoldings();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md max-w-lg mx-auto">
      <div className="border-b border-gray-700 pb-4">
        <h3 className="text-lg font-semibold">Holdings({holdings.length})</h3>
        <div className="flex justify-between mt-2">
          <div>
            <span className="text-gray-400 text-sm block">Current</span>
            <span className="text-lg font-bold">
              ₹{summary.current.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="text-gray-400 text-sm block">Invested</span>
            <span className="text-lg font-bold">
              ₹{summary.invested.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span
            className={`text-sm ${
              summary.totalReturns >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {summary.totalReturns >= 0 ? "+" : ""}₹
            {summary.totalReturns.toFixed(2)} (
            {((summary.totalReturns / summary.invested) * 100).toFixed(2)}%)
          </span>
          <span
            className={`text-sm ${
              summary.dayReturns >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {summary.dayReturns >= 0 ? "+" : ""}₹{summary.dayReturns.toFixed(2)}{" "}
            ({((summary.dayReturns / summary.invested) * 100).toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-gray-400 text-sm mb-2 flex justify-between">
          <span>Sort</span>
          <button className="text-blue-400 hover:underline">
            Current (Invested)
          </button>
        </div>

        {/* Render Holdings */}
        {holdings.length > 0 ? (
          holdings.map((holding) => {
            const currentProfitLoss =
              (holding.stock.currentPrice - holding.buyPrice) *
              holding.quantity;
            const profitLossClass =
              currentProfitLoss >= 0 ? "text-green-400" : "text-red-400";

            return (
              <div
                key={holding._id}
                className="flex justify-between items-center bg-gray-800 p-3 rounded-md mb-2"
              >
                <div>
                  <h4 className="text-sm font-semibold">
                    {holding.stock.Symbol}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {holding.quantity} shares
                  </p>
                </div>
                <div className="text-right">
                  <span className={`text-sm ${profitLossClass}`}>
                    {currentProfitLoss >= 0 ? "+" : ""}₹
                    {currentProfitLoss.toFixed(2)}
                  </span>
                  <p className="text-gray-400 text-xs">
                    ₹{(holding.buyPrice * holding.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-400">No holdings available</div>
        )}
      </div>
    </div>
  );
};

export default Holdings;

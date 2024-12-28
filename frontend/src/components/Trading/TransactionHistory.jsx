import React from "react";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history p-4 border rounded bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Type</th>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.symbol}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.price}</td>
              <td>{transaction.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

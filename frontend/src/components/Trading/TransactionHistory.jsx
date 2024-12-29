import React from "react";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history p-4 border rounded bg-gray-200 dark:bg-zinc-800/80 dark:text-white">
      <h2 className="text-xl text-center font-bold mb-4">
        Transaction History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-300 dark:bg-gray-700">
            <tr>
              <th className="p-2 border border-gray-300 dark:border-gray-700 text-left">
                Type
              </th>
              <th className="p-2 border border-gray-300 dark:border-gray-700 text-left">
                Symbol
              </th>
              <th className="p-2 border border-gray-300 dark:border-gray-700 text-left">
                Quantity
              </th>
              <th className="p-2 border border-gray-300 dark:border-gray-700 text-left">
                Price
              </th>
              <th className="p-2 border border-gray-300 dark:border-gray-700 text-left">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-900"
                }`}
              >
                <td className="p-2 border border-gray-300 dark:border-gray-700">
                  {transaction.type}
                </td>
                <td className="p-2 border border-gray-300 dark:border-gray-700">
                  {transaction.symbol}
                </td>
                <td className="p-2 border border-gray-300 dark:border-gray-700">
                  {transaction.quantity}
                </td>
                <td className="p-2 border border-gray-300 dark:border-gray-700">
                  {transaction.price}
                </td>
                <td className="p-2 border border-gray-300 dark:border-gray-700">
                  {transaction.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;

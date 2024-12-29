import React from "react";

const Transactions = () => {
  const transactions = [
    { stock: "AAPL", type: "Buy", quantity: 10, price: 150 },
    { stock: "TSLA", type: "Sell", quantity: 5, price: 650 },
  ];

  return (
    <div className="transactions p-6 dark:bg-zinc-900/80">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.stock}</td>
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

import React from "react";

const Portfolio = ({ portfolio }) => {
  return (
    <div className="portfolio p-4 border rounded bg-gray-200 mt-5 dark:bg-zinc-700/80 dark:text-white">
      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Average Price</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((item, index) => (
            <tr key={index}>
              <td>{item.symbol}</td>
              <td>{item.quantity}</td>
              <td>{item.averagePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;

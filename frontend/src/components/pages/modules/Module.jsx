import React from "react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Introduction to Stock Markets",
    chapters: "15 chapters",
    description:
      "The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it.",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Technical Analysis",
    chapters: "22 chapters",
    description:
      "Technical Analysis (TA) helps in developing a point of view. In this module, we will discover the complex attributes, various patterns, indicators, and theories of TA that will help you as a trader to find upright trading opportunities in the market.",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    chapters: "16 chapters",
    description:
      "The Fundamental Analysis (FA) module explores Equity research by reading financial statements and annual reports, calculating and analyzing Financial Ratios, and evaluating the intrinsic value of a stock to find long-term investing opportunities.",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Futures Trading",
    chapters: "13 chapters",
    description:
      "Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes.",
    color: "bg-pink-500",
  },
  {
    id: 5,
    title: "Options Theory for Professional Trading",
    chapters: "25 chapters",
    description:
      "Options Trading is a segment of the derivatives segment. Options contracts grant the buyer the right to buy/sell the underlying without a compulsory obligation. This module helps understand options theory for professional trading.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    title: "Option Strategies",
    chapters: "14 chapters",
    description:
      "A trader can use options strategies to monetize their views on volatility, sentiment, and timing. This module explores various options strategies that can be built with a multi-dimensional approach involving Option Greeks, Risk-Return, etc.",
    color: "bg-purple-500",
  },
];

const ModuleCard = ({ id, title, chapters, description, color }) => {
  const navigate = useNavigate();
  const handleTextModule = () => {
    navigate("/module-text");
  };
  return (
    <div
      className="p-8 border rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-zinc-900 dark:border-gray-700"
      onClick={handleTextModule}
    >
      <div className="flex items-center mb-4">
        <h1 className="text-4xl font-bold dark:text-white">{id}</h1>
        <div className={`w-16 h-1 ml-3 ${color}`}></div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
        {chapters}
      </p>
      <p className="text-gray-800 dark:text-gray-300 mb-5 leading-relaxed">
        {description}
      </p>
      <div className="flex gap-6 text-blue-600 dark:text-blue-400">
        <button className="text-sm font-medium hover:text-blue-800 dark:hover:text-blue-500 transition-colors duration-200">
          View Module
        </button>
        <button className="text-sm font-medium hover:text-blue-800 dark:hover:text-blue-500 transition-colors duration-200">
          Watch Videos
        </button>
        <button className="text-sm font-medium hover:text-blue-800 dark:hover:text-blue-500 transition-colors duration-200">
          हिंदी
        </button>
      </div>
    </div>
  );
};

const Modules = () => {
  return (
    <div className="px-10 py-10 bg-gray-50 dark:bg-zinc-900 transition-colors">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Modules;

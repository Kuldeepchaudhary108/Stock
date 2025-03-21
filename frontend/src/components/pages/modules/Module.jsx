import React from "react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Introduction to Stock Markets",
    chapters: "15 chapters",
    description:
      "Learn the basics of stock markets, how they function, and key intermediaries.",
  },
  {
    id: 2,
    title: "Technical Analysis",
    chapters: "22 chapters",
    description:
      "Explore patterns, indicators, and theories to make informed trading decisions.",
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    chapters: "16 chapters",
    description:
      "Analyze financial statements and evaluate the intrinsic value of stocks.",
  },
  {
    id: 4,
    title: "Futures Trading",
    chapters: "13 chapters",
    description:
      "Learn about futures trading concepts, including margins, leverage, and hedging.",
  },
  {
    id: 5,
    title: "Options Theory for Professional Trading",
    chapters: "25 chapters",
    description:
      "Understand options contracts, rights, and obligations for professional trading.",
  },
  {
    id: 6,
    title: "Option Strategies",
    chapters: "14 chapters",
    description:
      "Explore option strategies and apply risk-return analysis using Option Greeks.",
  },
];

const ModuleCard = ({ id, title, chapters, description }) => {
  const navigate = useNavigate();
  const handleTextModule = () => {
    navigate("/module-text");
  };

  return (
    <div
      className="p-6 rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow bg-white dark:bg-zinc-800 dark:border-zinc-600"
      onClick={handleTextModule}
    >
      <div className="flex items-center justify-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          {id}
        </h1>
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
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
          View Module
        </button>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
          Watch Videos
        </button>
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
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

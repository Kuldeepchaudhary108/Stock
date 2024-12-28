import React from "react";

const videoModules = [
  {
    id: 1,
    title: "Introduction to Stock Market (video series)",
    chapters: "10 chapters",
    description:
      "This video module on Introduction to Stock markets will familiarize you with the fundamentals of the stock market, how to get started, and the various intermediaries in the ecosystem.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-1.png",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Technical Analysis (Video Series)",
    chapters: "12 chapters",
    description:
      "Technical Analysis (TA) plays an important role in developing a point of view. Like every other research, TA also has its own attributes. In this module, we discover all those complex attributes of TA, study various patterns, indicators, and theories that will help you as a trader to find upright trading opportunities in the market.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-2.png",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Fundamental Analysis (Video Series)",
    chapters: "10 chapters",
    description:
      "Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long-term investments, this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratios, and more.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-3.png",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Fundamental Analysis (Video Series)",
    chapters: "10 chapters",
    description:
      "Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long-term investments, this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratios, and more.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-3.png",
    color: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Introduction to Stock Market (video series)",
    chapters: "10 chapters",
    description:
      "This video module on Introduction to Stock markets will familiarize you with the fundamentals of the stock market, how to get started, and the various intermediaries in the ecosystem.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-1.png",
    color: "bg-green-500",
  },
];

const VideoModuleCard = ({
  id,
  title,
  chapters,
  description,
  image,
  color,
}) => {
  return (
    <div className="p-6 border shadow-md rounded-md">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold">{id}</h1>
        <div className={`w-full h-1 ml-2 ${color}`}></div>
      </div>
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-700">
        {title}
      </h2>
      <p className="text-sm text-gray-500 mb-4">{chapters}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4 text-blue-500">
        <button className="hover:underline">View module</button>
        <button className="hover:underline">Watch videos</button>
        <button className="hover:underline">हिंदी</button>
      </div>
    </div>
  );
};

const VideoModules = () => {
  return (
    <div className="px-10 py-10">
      <h1 className="text-4xl font-bold mb-8">Video modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoModules.map((module) => (
          <VideoModuleCard key={module.id} {...module} />
        ))}
      </div>
    </div>
  );
};

export default VideoModules;

import React from "react";
import { useNavigate } from "react-router-dom";

const videoModules = [
  {
    id: 1,
    title: "Introduction to Stock Market (video series)",
    chapters: "10 chapters",
    description:
      "This video module on Introduction to Stock markets will familiarize you with the fundamentals of the stock market, how to get started, and the various intermediaries in the ecosystem.",
    image: "/elements/stock4.png",
  },
  {
    id: 2,
    title: "Technical Analysis (Video Series)",
    chapters: "12 chapters",
    description:
      "Technical Analysis (TA) plays an important role in developing a point of view. Like every other research, TA also has its own attributes. In this module, we discover all those complex attributes of TA, study various patterns, indicators, and theories that will help you as a trader to find upright trading opportunities in the market.",
    image: "/elements/stock6.jpeg",
  },
  {
    id: 3,
    title: "Fundamental Analysis (Video Series)",
    chapters: "10 chapters",
    description:
      "Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long-term investments, this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratios, and more.",
    image: "/elements/stock5.jpeg",
  },
  {
    id: 4,
    title: "Fundamental Analysis (Video Series)",
    chapters: "10 chapters",
    description:
      "Fundamental Analysis (FA) is a holistic approach to study a business. If you are an investor that is looking for long-term investments, this module will help you understand Equity research, help you in reading the financial statements, annual reports, calculation of Financial Ratios, and more.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-3.png",
  },
  {
    id: 5,
    title: "Introduction to Stock Market (video series)",
    chapters: "10 chapters",
    description:
      "This video module on Introduction to Stock markets will familiarize you with the fundamentals of the stock market, how to get started, and the various intermediaries in the ecosystem.",
    image:
      "https://zerodha.com/varsity/wp-content/uploads/2015/11/Module-1.png",
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
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate("/Video-lesson");
  };
  return (
    <div
      onClick={handleVideoClick}
      className="p-6 border shadow-md rounded-md cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:shadow-lg dark:bg-zinc-900 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold dark:text-white">{id}</h1>
        <div className={`w-full h-1 ml-2 bg-zinc-900 dark:bg-white`}></div>
      </div>
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-700 dark:text-blue-400">
        {title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {chapters}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-4 font-semibold text-zinc-800 dark:text-blue-400">
        <button className="hover:underline hover:text-lg ">View module</button>
        <button className="hover:underline hover:text-lg">Watch videos</button>
        <button className="hover:underline hover:text-lg">हिंदी</button>
      </div>
    </div>
  );
};

const VideoModules = () => {
  return (
    <div className="px-10 py-10 dark:bg-zinc-900 ">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Video modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoModules.map((module) => (
          <VideoModuleCard key={module.id} {...module} />
        ))}
      </div>
    </div>
  );
};

export default VideoModules;

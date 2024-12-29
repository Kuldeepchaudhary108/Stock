// pages/HomePage.jsx
import React from "react";
import { Card, VideoGrid } from "../index.js";

const HomePage = () => {
  const cards = [
    {
      id: 1,
      title: "Modules",
      bgColor: "#ADD8E6",
      icon: "https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-modules.svg",
    },
    {
      id: 2,
      title: "Live",
      bgColor: "#FADADD",
      icon: "https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-blog.svg",
    },
    {
      id: 3,
      title: "Videos",
      bgColor: "#FFD700",
      icon: "https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-videos.svg",
    },
    {
      id: 4,
      title: "Certified",
      bgColor: "#D6A3FB",
      icon: "https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-certified.svg",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <div className="flex flex-col lg:flex-row mt-7 p-4 lg:p-10">
        <div className="lg:w-1/2 p-3">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold m-2">
            Free and open
          </h1>
          <h4 className="text-xl sm:text-2xl lg:text-4xl p-2">
            Stock market and financial education
          </h4>
          <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-500 dark:text-gray-400">
            Varsity is an extensive and in-depth collection of stock market and
            financial lessons created by Karthik Rangappa at MerCat. It is free
            and openly accessible to everyone and is one of the largest
            financial education resources on the web.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="https://zerodha.com/varsity/wp-content/themes/varsity2//images/landing.png"
            alt="Landing Image"
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
      <div className="p-4 lg:p-8 mt-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Explore MerCet
        </h1>
        <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              bgColor={card.bgColor}
              icon={card.icon}
              title={card.title}
            />
          ))}
        </div>
      </div>
      <div className="cursor-pointer">
        <VideoGrid />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center m-10 dark:bg-zinc-600 rounded-lg p-7">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-certified.svg"
            alt="Certificates"
            className="w-48"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Varsity Certified
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl mt-8">
            An online certification program designed to test your market
            knowledge and give you the confidence to start your career in
            capital markets.
          </p>
          <button className="w-28 h-8 rounded-2xl m-5 bg-blue-600 hover:bg-blue-700 hover:text-white transform transition-transform duration-500 ease-in-out hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
      <hr className="m-8 border-gray-300 dark:border-gray-700" />

      <div className="w-[75vw] h-full mt-28 mb-28 mx-auto shadow-md text-center border border-gray-300 rounded-lg bg-white dark:bg-zinc-700 dark:text-black dark:shadow-lg dark:border-none">
        {" "}
        <h3 className="text-4xl font-semibold py-4 dark:text-gray-200">
          Recent comments
        </h3>
        <div className="m-10">
          <div className="flex gap-10 items-start">
            <img
              src="/vite.svg"
              alt="userProfile"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg dark:text-white">
                Kuldeep Chaudhary
              </p>
              <p className="mt-3 text-gray-700 dark:text-white">
                Pavit, so it's the difference between the strike and spot, in
                this case 32-25 and minus the premium paid, i.e. 1.35. I have
                explained this eventually, wanted to keep it simple at this
                stage :) ...
              </p>
            </div>
          </div>
          <hr className="m-8 border-gray-300" />
          <div className="flex gap-10 items-start">
            <img
              src="/vite.svg"
              alt="userProfile"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg dark:text-white">
                Kuldeep Chaudhary
              </p>
              <p className="mt-3 text-gray-700 dark:text-white">
                Pavit, so it's the difference between the strike and spot, in
                this case 32-25 and minus the premium paid, i.e. 1.35. I have
                explained this eventually, wanted to keep it simple at this
                stage :) ...
              </p>
            </div>
          </div>
          <hr className="m-8 border-gray-300" />
          <div className="flex gap-10 items-start">
            <img
              src="/vite.svg"
              alt="userProfile"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg dark:text-white">
                Kuldeep Chaudhary
              </p>
              <p className="mt-3 text-gray-700 dark:text-white">
                Pavit, so it's the difference between the strike and spot, in
                this case 32-25 and minus the premium paid, i.e. 1.35. I have
                explained this eventually, wanted to keep it simple at this
                stage :) ...
              </p>
            </div>
          </div>
          <hr className="m-8 border-gray-300" />
          <div className="flex gap-10 items-start">
            <img
              src="/vite.svg"
              alt="userProfile"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg dark:text-white">
                Kuldeep Chaudhary
              </p>
              <p className="mt-3 text-gray-700 dark:text-white">
                Pavit, so it's the difference between the strike and spot, in
                this case 32-25 and minus the premium paid, i.e. 1.35. I have
                explained this eventually, wanted to keep it simple at this
                stage :) ...
              </p>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
        </div>
      </div>
      <div className="flex flex-col rounded-xl lg:flex-row justify-around m-10 w-full p-10 lg:w-[75vw] mx-auto dark:bg-zinc-700 ">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Don't have a MerCet account?
          </h2>
          <p className="mt-5 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            voluptates!
          </p>
        </div>
        <div>
          <button className="w-48 h-10 text-xl rounded-md bg-blue-600 hover:bg-blue-700 text-white">
            Open an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

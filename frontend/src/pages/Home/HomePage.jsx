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
    <div>
      <div className="flex mt-7 ">
        <div className="w-1/2 p-3">
          <h1 className="text-6xl font-semibold m-2">Free and open</h1>
          <h4 className="text-4xl p-2">stock market and financial education</h4>
          <p className="text-lg font-medium text-gray-500">
            Varsity is an extensive and in-depth collection of stock market and
            financial lessons created by Karthik Rangappa at Zerodha. It is free
            and openly accessible to everyone and is one of the largest
            financial education resources on the web. No signup, no pay-wall, no
            ads.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://zerodha.com/varsity/wp-content/themes/varsity2//images/landing.png"
            alt=""
            className="w-[500px]"
          />
        </div>
      </div>
      <div className="p-8 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore MerCet</h1>
        <div className="mt-10 flex  justify-between items-center">
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
      <div className="flex justify-between m-10">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/ico-certified.svg"
            alt="certificates "
            className="w-48"
          />
        </div>

        <div className="w-1/2">
          <h1 className="text-4xl font-semibold ">Varsity Certified</h1>
          <p className="text-gray-500 text-xl mt-8">
            An online certification program designed to test your market
            knowledge and give you the confidence to start your career in
            capital markets.
          </p>
          <button className="w-28 h-8 rounded-2xl m-5 bg-blue-600 hover:bg-blue-700 hover:text-white  transform transition-transform duration-500 ease-in-out hover:scale-105">
            {" "}
            Learn More
          </button>
        </div>
      </div>
      <hr className="m-8 border-gray-300" />

      <div className="w-[75vw] h-full mt-28 mb-28 mx-auto shadow-md text-center border border-gray-300 rounded-lg">
        <h3 className="text-4xl font-semibold py-4">Recent comments</h3>
        <div className="m-10">
          <div className="flex gap-10 items-start">
            <img
              src="/vite.svg"
              alt="userProfile"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-lg">Kuldeep Chaudhary</p>
              <p className="mt-3 text-gray-700">
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
              <p className="font-semibold text-lg">Kuldeep Chaudhary</p>
              <p className="mt-3 text-gray-700">
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
              <p className="font-semibold text-lg">Kuldeep Chaudhary</p>
              <p className="mt-3 text-gray-700">
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
              <p className="font-semibold text-lg">Kuldeep Chaudhary</p>
              <p className="mt-3 text-gray-700">
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
      <div className="flex justify-around m-10 w-[75vw] h-full mx-auto">
        <div className="">
          <h2 className="text-3xl font-semibold">
            {" "}
            Don't have a MerCet account?
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            voluptates!
          </p>
        </div>
        <div>
          <button className="w-48 h-10 text-xl rounded-md text-center bg-blue-600 text-white">
            {" "}
            open an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

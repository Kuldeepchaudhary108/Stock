import React from "react";

const VarsityCertified = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-gray-50 dark:bg-zinc-900 rounded-lg shadow-md transition-colors">
      {/* Section 1: Header with Icon */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-10">
        <img
          src="/elements/stock9.jpeg"
          alt="Certified Icon"
          className="w-32 h-32 object-cover rounded-full mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 dark:text-white">
            Varsity Certified
          </h1>
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-7 text-sm sm:text-base">
            Varsity Certified is an online certification program designed to
            test your market knowledge and give you the confidence to start your
            career in capital markets.
          </p>
          <p className="text-gray-600 dark:text-gray-300 font-medium mb-9 text-sm sm:text-base">
            Easy registration by choosing an exam schedule convenient for you. A
            nominal fee of ₹250 + 18% GST is charged to cover the cost of
            organising the test.
          </p>
          <div className="text-center mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transform transition-all duration-300 ease-in-out hover:scale-105">
              Register here
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: Format, Eligibility, Test Topics */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 dark:bg-zinc-700 mb-10 rounded-xl">
        <div className="m-6 sm:m-10 w-full">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
              Format
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl">
              Answer 100 multiple-choice online questions in 100 minutes.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
              Eligibility
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl">
              Score a minimum of 65% and get a certificate as soon as you clear
              the test.
            </p>
          </div>
        </div>
        <div className="m-6 sm:m-10 w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 dark:text-white">
            Test Topics
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl">
            Introduction to stock markets, Fundamental analysis, Technical
            Analysis, and Personal Finance (Mutual Funds).
          </p>
        </div>
      </div>

      {/* Section 3: Why Varsity Certified */}
      <div className="w-full sm:w-[75vw] mx-auto h-full border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col sm:flex-row gap-6 sm:gap-10 p-4 bg-white dark:bg-zinc-700 mb-10">
        <img
          src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/certified-video.jpg"
          alt="Certified Video"
          className="w-full sm:w-96 rounded-lg mb-6 sm:mb-0"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl text-center dark:text-white">
            Why Varsity Certified?
          </h1>
          <p className="text-base sm:text-lg mt-4 text-gray-600 dark:text-gray-300">
            Finance is a crucial subject we cannot afford to neglect. We all
            deal with money in our lives, regardless of our occupation, yet
            often lack sufficient knowledge about it. Watch Nithin and Karthik
            discuss the importance of financial literacy and why you should be
            taking the Varsity Certified test.
          </p>
        </div>
      </div>

      {/* Section 4: Learn More */}
      <div className="w-full sm:w-[75vw] flex mx-auto h-full border border-gray-300 dark:border-gray-700 rounded-lg m-6 sm:m-10 p-4 bg-white dark:bg-zinc-700">
        <div className="w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0">
          <img
            src="/elements/stock9.jpeg"
            alt="Certificates Icon"
            className="w-48 rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-semibold dark:text-white">
            Varsity Certified
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl mt-6 sm:mt-8">
            An online certification program designed to test your market
            knowledge and give you the confidence to start your career in
            capital markets.
          </p>
          <button className="w-28 sm:w-32 h-8 rounded-2xl m-5 bg-blue-600 hover:bg-blue-700 text-white transform transition-transform duration-500 ease-in-out hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VarsityCertified;

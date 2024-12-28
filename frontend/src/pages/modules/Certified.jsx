import React from "react";

const VarsityCertified = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-gray-50 rounded-lg shadow-md">
      <div className="flex gap-12">
        <img
          src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/certified.svg"
          alt=""
        />
        <div>
          <h1 className="text-6xl font-bold text-center mb-6">
            Varsity Certified
          </h1>
          <p className="text-gray-600 font-medium mb-7 ">
            Varsity Certified is an online certification program designed to
            test your market knowledge and give you the confidence to start your
            career in capital markets.
          </p>
          <p className="text-gray-600 font-medium mb-9 ">
            Easy registration by choosing an exam schedule convenient for you. A
            nominal fee of ₹250 + 18% GST is charged to cover the cost of
            organising the test.
          </p>
          <div className="text-center mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
              Register here
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-16">
        <div className="m-10">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Format</h2>
            <p className="text-gray-500 text-xl">
              Answer 100 multiple-choice online questions in 100 minutes.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Eligibility</h2>
            <p className="text-gray-500 text-xl">
              Score a minimum of 65% and get a certificate as soon as you clear
              the test.
            </p>
          </div>
        </div>
        <div className="m-10">
          <h2 className="text-2xl font-bold mb-2">Test topics</h2>
          <p className="text-gray-500 text-xl">
            Introduction to stock markets, Fundamental analysis, Technical
            Analysis, and Personal Finance (Mutual Funds).
          </p>
        </div>
      </div>
      <div className="w-[75vw] mx-auto h-full border border-gray-300 rounded-lg flex gap-10 p-4">
        <img
          src="https://zerodha.com/varsity/wp-content/themes/varsity2/images/certified-video.jpg"
          alt=""
          className="w-96"
        />
        <div>
          <h1 className="text-4xl text-center">Why Varsity Certified?</h1>
          <p className="text-lg mt-4 text-gray-600">
            Finance is a crucial subject we cannot afford to neglect. We all
            deal with money in our lives, regardless of our occupation, yet
            often lack sufficient knowledge about it. Watch Nithin and Karthik
            discuss the importance of financial literacy and why you should be
            taking the Varsity Certified test.
          </p>
        </div>
      </div>
      <div className="w-[75vw] flex mx-auto h-full border border-gray-300 rounded-lg  m-10 p-4">
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
    </div>
  );
};

export default VarsityCertified;

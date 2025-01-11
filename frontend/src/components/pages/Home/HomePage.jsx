// pages/HomePage.jsx
import React from "react";
import { Card, VideoGrid } from "../index.js";
import { useNavigate } from "react-router";
import {
  FaChartBar,
  FaWallet,
  FaBox,
  FaBullseye,
  FaBinoculars,
  FaSyncAlt,
  // FaChartLine,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
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
  const features = [
    {
      icon: <FaChartBar size={40} className="text-teal-600 mx-auto" />,
      title: "Trading is an Art and Science",
      description:
        "Just like any skilled profession, successful trading requires practice and experience. It's a journey of continuous learning and strategy refinement.",
    },
    {
      icon: <FaWallet size={40} className="text-teal-600 mx-auto" />,
      title: "Cost of Learning",
      description:
        "Gaining real-world trading experience comes with financial risk. Many aspiring traders lose money in the process of learning, which is a significant barrier.",
    },
    {
      icon: <FaBox size={40} className="text-teal-600 mx-auto" />,
      title: "Risk-Free Practice",
      description:
        "Neostox offers a unique solution – a virtual trading platform where you can practice with real-time market data without risking a single rupee.",
    },
    {
      icon: <FaBullseye size={40} className="text-teal-600 mx-auto" />,
      title: "Build Confidence",
      description:
        "Trade with up to ₹1 Crore in virtual money, allowing you to experiment and learn in a real-market environment without the fear of financial loss.",
    },
    {
      icon: <FaBinoculars size={40} className="text-teal-600 mx-auto" />,
      title: "Become an Expert",
      description:
        "Our platform is designed to help traders at all levels – from beginners to seasoned professionals – to hone their strategies and improve their market acumen.",
    },
    {
      icon: <FaSyncAlt size={40} className="text-teal-600 mx-auto" />,
      title: "Learn, Analyze, Trade, Repeat",
      description:
        "With advanced AI analytics and a suite of trading tools, Neostox empowers you to practice, analyze your strategies, and refine your trading decisions.",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <section className="bg-gradient-to-b from-black to-gray-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Unlock Your Trading Potential with MerCat Trading Group
        </h1>
        <p className="mb-8">
          Join a community of successful traders and get funded to trade with
          the best tools and support.
        </p>
        <div className="space-x-4">
          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-blue-950">
            Start Free Trial
          </button>
          <button className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600">
            Learn More
          </button>
        </div>
      </section>
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
            src="/elements/stock3.jpeg"
            alt="Landing Image"
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
      <section className=" py-16 px-8 flex gap-36  dark:bg-zinc-700/80">
        <div className="w-[30%]">
          <img className="w-full" src="/elements/stock10.jpeg" alt="error" />
        </div>
        <div className=" w-[60%] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Paper Trading Should Be Your First Step Before You Invest Real
          </h2>
          <p className="text-center text-lg mb-12">
            Tempting as it may be to dive headfirst into the exciting world of
            stock trading, seasoned investors and newbies alike agree:{" "}
            <span className="font-semibold">
              paper trading is your secret weapon for success
            </span>
            . Before risking your hard-earned cash, put your skills to the test
            in a risk-free virtual trading environment. Think of it as a
            training ground where you can learn, experiment, and build
            confidence without losing a single penny.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white shadow-md rounded-lg p-4 text-center  dark:bg-zinc-600/80">
              <h3 className="font-bold text-lg">Master the Mechanics</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center  dark:bg-zinc-600/80">
              <h3 className="font-bold text-lg">Discipline Your Emotions</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center  dark:bg-zinc-600/80">
              <h3 className="font-bold text-lg">Fine-Tune Your Techniques</h3>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center  dark:bg-zinc-600/80">
              <h3 className="font-bold text-lg">
                Build Confidence and Momentum
              </h3>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Read More..
            </button>
          </div>
        </div>
      </section>
      <section className="bg-teal-50/50 py-16 px-8 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            Practice is Pivotal in Trading: Minimize Risk, Maximise Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center dark:bg-zinc-700/80"
              >
                {feature.icon}
                <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-teal-50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-12 w-full bg-green-100 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
          <div>
            <p className="font-bold text-green-700">
              Authorized Practice Partners
            </p>
            <p className="text-gray-600">for IITs, IIMs and Premier Colleges</p>
          </div>
          <div>
            <p className="font-bold text-green-700">15 Million+</p>
            <p className="text-gray-600">Orders Processed Everyday</p>
          </div>
          <div>
            <p className="font-bold text-green-700">1000+</p>
            <p className="text-gray-600">
              Contests hosted for Educational Institutions
            </p>
          </div>
          <div>
            <p className="font-bold text-green-700">5000+</p>
            <p className="text-gray-600">Videos on YouTube made by our users</p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white text-black dark:bg-zinc-800/80 dark:text-white ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          How It Works?
        </h2>
        <div className="flex justify-center space-x-12">
          <div
            className="text-center cursor-pointer bg-gray-300/70 dark:bg-zinc-600 p-8 rounded-xl "
            onClick={() => navigate("/video-module")}
          >
            <div className="mb-4 text-orange-500 text-4xl">📋</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Assessment
            </h3>
            <p className="text-gray-600 dark:text-white">
              Learn by our MerCat.
            </p>
          </div>
          <div
            onClick={() => navigate("/loan")}
            className="text-center cursor-pointer bg-gray-300/70 dark:bg-zinc-600 p-8 rounded-xl "
          >
            <div className="mb-4 text-orange-500 text-4xl ">📈</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Apply
            </h3>
            <p className="text-gray-600 dark:text-white">
              Prove your trading skills with our evaluations.
            </p>
          </div>
          <div
            className="text-center cursor-pointer bg-gray-300/70 dark:bg-zinc-600 p-8 rounded-xl "
            onClick={() => navigate("/trading-chart")}
          >
            <div className="mb-4 text-orange-500 text-4xl">🚀</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Trade & Grow
            </h3>
            <p className="text-gray-600 dark:text-white">
              Grow your profits with our tools and support.
            </p>
          </div>
        </div>
      </section>

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
            src="/elements/stock9.jpeg"
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

      <div className=" bg-white dark:bg-zinc-900 py-16 px-8">
        <div className="flex gap-4 justify-center dark:bg-zinc-800 rounded-lg p-3">
          <div className="flex justify-center items-center">
            <img className="w-96" src="/elements/stock11.png" alt="" />
          </div>

          {/* Right Section: Text Content */}
          <div className="mt-8 md:mt-0 md:ml-8 text-gray-800 dark:text-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Creating Smart & Profitable Traders
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Trade with virtual money up to ₹1 Crore</li>
              <li>
                Trading environment with near real-time tick-by-tick price data
              </li>
              <li>Trade equities, futures, and options</li>
              <li>
                Smart tools and analytics to help you every step of the way
              </li>
              <li>
                Basket Orders, Hedge Trading, Options Chain, Screeners, and much
                more
              </li>
              <li>Easy-to-use platform to help you learn faster</li>
              <li>Test Your Strategies in Real-Market with Virtual Money</li>
              <li>No Fear of Losing Money</li>
            </ul>
          </div>
        </div>
      </div>
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

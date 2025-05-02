import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaWallet,
  FaBox,
  FaBullseye,
  FaBinoculars,
  FaSyncAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../../store/authSlice.js";

const TradingHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  useEffect(() => {
    if (!isLoggedIn) {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        dispatch(authLogin(JSON.parse(storedUserData)));
        setIsLoggedIn(true);
      }
    }
  }, [isLoggedIn, dispatch]);

  const handleLogin = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleSignup = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="home-page text-center mt-10 dark:text-white">
      <div className="bg-white flex flex-col sm:flex-row gap-5 font-sans dark:bg-zinc-900 p-4 items-center rounded-lg">
        <div className="w-full sm:w-1/2 p-6">
          <div className="text-left p-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-green-700">
              Paper Trading Platform with AI Analytics
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
              Master the Art of Trading!
            </p>
            <p className="text-md sm:text-lg text-red-600 mt-1">
              Experience the Thrill of Live Trading with Zero Risk!
            </p>
            <p className="text-green-600 font-medium">
              Practice Trading {">"} Equities | Options | Futures
            </p>
            <p className="text-red-500 font-semibold mt-1">
              Solely for educational purpose
            </p>
          </div>

          {!isLoggedIn && (
            <div className="p-6 gap-5 flex w-full sm:w-80">
              <button
                onClick={() => handleLogin()}
                className="w-full bg-blue-600 rounded-xl text-white hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={() => handleSignup()}
                className="w-full bg-blue-600 rounded-xl text-white hover:bg-blue-700"
              >
                Signup
              </button>
              <p className="text-center text-sm text-gray-500 mt-2">
                It's Free
              </p>
            </div>
          )}
          {isLoggedIn && (
            <div>
              {" "}
              <button className="w-full bg-blue-600 rounded-xl text-white hover:bg-blue-700">
                Let Trades
              </button>
            </div>
          )}

          {/* Download Section */}
          <div className="mt-10">
            <a
              href="#"
              className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-24 m-auto"
              />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img
            className="rounded-lg w-full"
            src="/elements/stock13.png"
            alt="error"
          />
        </div>
      </div>

      {/* Section 2 */}
      <section className=" py-16 px-8 md:flex gap-36  dark:bg-zinc-700/80">
        <div className=" w-full md:w-[30%]">
          <img className="w-full" src="/elements/stock10.jpeg" alt="error" />
        </div>
        <div className="w-full md:w-[60%] mx-auto">
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

      {/* Authorized Practice Partners Section */}
      <div className="mt-12 w-full bg-green-100 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center px-4">
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

      {/* Features Section */}
      <section className="bg-teal-50 py-16 px-8 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
            Practice is Pivotal in Trading: Minimize Risk, Maximise Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      <div className="bg-white dark:bg-zinc-900 py-16 px-8">
        <div className="flex flex-col md:flex-row gap-8 justify-center dark:bg-zinc-800 rounded-lg p-3">
          {/* Left Section: Image */}
          <div className="flex justify-center items-center w-full md:w-auto">
            <img
              className="w-full md:w-96"
              src="/elements/stock11.png"
              alt=""
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="mt-8 md:mt-0 md:ml-8 text-gray-800 dark:text-gray-200 w-full md:w-auto">
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
    </div>
  );
};

export default TradingHome;

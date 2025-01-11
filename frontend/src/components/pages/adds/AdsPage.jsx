import React, { useState } from "react";
import { ethers } from "ethers";
import { apiCLient, COMP_BLOCK } from "../../../services/api.js";

const AdsPage = () => {
  const topPicks = [
    {
      id: 1,
      title: "Surveys",
      description: "Share your opinion to earn rewards.",
      reward: "0.51 ~ $0.59",
      img: "/elements/ads6.jpeg",
    },
    {
      id: 2,
      title: "Honeygain",
      description: "Share your spare internet to earn.",
      reward: "0.95 ~ $1.09",
      img: "/elements/ads5.jpeg",
    },
    {
      id: 3,
      title: "Videos",
      description: "Watch videos & earn effortlessly.",
      reward: "0.01978 ~ $0.02",
      img: "/elements/ads4.jpeg",
    },
    {
      id: 4,
      title: "World of Tanks",
      description: "Download and play World of Tanks.",
      reward: "0.29 ~ $0.33",
      img: "/elements/ads3.jpeg",
    },
    {
      id: 5,
      title: "YouTube",
      description: "Watch YouTube videos to earn.",
      reward: "0.07 ~ $0.08",
      img: "/elements/ads2.jpeg",
    },
    {
      id: 6,
      title: "Follow on X",
      description: "Follow projects on X for rewards.",
      reward: "0.04 ~ $0.05",
      img: "/elements/ads.jpeg",
    },
  ];

  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [complete, setComplete] = useState(false);

  const handleConnectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to proceed.");
        return;
      }

      // Request wallet connection
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const userAddress = accounts[0];

      setWalletConnected(true);
      setWalletAddress(userAddress);

      console.log("Wallet connected:", userAddress);
      alert("Wallet connect succefully");
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const handleReward = async () => {
    if (!walletConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      console.log("Attempting to reward:", walletAddress);
      const rewardAmount = "0.001";
      setComplete(true);

      alert("Reward added successfully");
      const response = await apiCLient.post(COMP_BLOCK, {
        userAddress: walletAddress,
        rewardAmount,
      });

      if (response) {
        console.log("Reward successfully claimed:", response.data);
      }
    } catch (error) {
      console.error(
        "Error claiming reward:",
        error.response?.data || error.message
      );
      // alert("Failed to claim the reward. Please try again.");
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-6 text-zinc-100">
          Earn money in Web3: watch ads, take surveys, and more
        </h1>
        <p className="text-lg text-green-500 mb-6">
          <span>$ First reward in 8 seconds</span> &nbsp;|&nbsp;{" "}
          <span>$ Over 3,500 offers available</span>
        </p>
        {!walletConnected ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <div className="text-green-400">
            <p>Wallet Connected:</p>
            <p className="text-sm">{walletAddress}</p>
          </div>
        )}
      </header>

      {/* Top Picks Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-zinc-200">Top Picks</h2>
          <a href="#" className="text-blue-400 hover:text-blue-600 font-medium">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {topPicks.map((ad) => (
            <div
              key={ad.id}
              className="bg-zinc-800 p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out relative"
              onClick={() => handleReward()}
            >
              <img
                src={ad.img}
                alt={ad.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-zinc-100">{ad.title}</h3>
                <p className="text-sm text-zinc-400">{ad.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-green-400 font-semibold">
                    {ad.reward}
                  </span>
                  <button className="text-sm text-blue-400 hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                HOT
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdsPage;

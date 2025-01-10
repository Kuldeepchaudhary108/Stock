import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { COMP_BLOCK } from "../../services/api";
// Ensure to import or define apiClient and COMP_BLOCK if used externally

const VideoList = ({ videos, onVideoSelect, completedVideos }) => {
  return (
    <div className="w-1/3 bg-gray-50 p-4 rounded-lg shadow-md dark:bg-zinc-800">
      <h2 className="text-lg font-bold mb-4 dark:text-white">
        Module 1. Introduction to Stock Market (video series)
      </h2>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-600 dark:text-white">
          Progress: {completedVideos.length}/{videos.length} videos completed
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${(completedVideos.length / videos.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <ul className="space-y-2 max-h-[400px] overflow-y-scroll">
        {videos.map((video, index) => (
          <li
            key={index}
            className={`flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
              completedVideos.includes(index) ? "bg-green-100" : ""
            }`}
            onClick={() => onVideoSelect(index)}
          >
            <span className="text-blue-600 font-medium">
              {index + 1}. {video.title}
            </span>
            <span className="text-gray-500 text-sm">{video.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const VideoPlayer = ({ selectedVideo, markVideoComplete }) => {
  return (
    <div className="w-2/3 p-4">
      <h3 className="text-2xl font-bold mb-4 dark:text-white">
        {selectedVideo.title}
      </h3>
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src={selectedVideo.url}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[440px]"
          onLoad={markVideoComplete}
        ></iframe>
      </div>
    </div>
  );
};

const VideoLesson = () => {
  const videos = [
    {
      title: "Why should you Invest?",
      duration: "00:08:25",
      url: "https://www.youtube.com/embed/example1",
    },
    {
      title: "Market Intermediaries",
      duration: "00:08:58",
      url: "https://www.youtube.com/embed/example2",
    },
    {
      title: "All about the Initial Public Offer (IPO)",
      duration: "00:08:07",
      url: "https://www.youtube.com/embed/example3",
    },
    {
      title: "Why do stock prices fluctuate?",
      duration: "00:03:51",
      url: "https://www.youtube.com/embed/example4",
    },
    {
      title: "How does a trading platform work?",
      duration: "00:07:07",
      url: "https://www.youtube.com/embed/example5",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [rewardPending, setRewardPending] = useState(false); // New state to handle pending rewards

  const handleVideoSelect = (index) => {
    setSelectedVideoIndex(index);
  };

  const markVideoComplete = () => {
    if (!completedVideos.includes(selectedVideoIndex)) {
      setCompletedVideos((prev) => [...prev, selectedVideoIndex]);
    }
  };

  useEffect(() => {
    if (completedVideos.length === videos.length) {
      if (walletConnected) {
        handleReward();
      } else {
        setRewardPending(true); // Mark reward as pending if the wallet is not connected
        alert("Please connect your wallet to claim your reward.");
      }
    }
  }, [completedVideos]);

  useEffect(() => {
    if (walletConnected && rewardPending) {
      handleReward();
      setRewardPending(false); // Clear pending reward flag after processing
    }
  }, [walletConnected]);

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
      alert("Wallet connected successfully.");
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const handleReward = async () => {
    try {
      console.log("Attempting to reward:", walletAddress);
      const rewardAmount = "0.001";

      alert("Reward added successfully.");
      const response = await apiClient.post(COMP_BLOCK, {
        userAddress: walletAddress,
        rewardAmount,
      });

      if (response) {
        console.log("Reward successfully claimed:", response.data);
        setCompletedVideos([]);
      }
    } catch (error) {
      console.error(
        "Error claiming reward:",
        error.response?.data || error.message
      );
      alert("Failed to claim reward. Please try again.");
    }
  };

  return (
    <>
      {!walletConnected ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 relative top-2 left-1/2 text-white py-3 px-8 rounded-lg text-lg shadow-md"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="text-green-400 text-center">
          <p>Wallet Connected:</p>
          <p className="text-sm">{walletAddress}</p>
        </div>
      )}
      <div className="max-w-6xl mx-auto p-6 flex gap-4">
        <VideoList
          videos={videos}
          onVideoSelect={handleVideoSelect}
          completedVideos={completedVideos}
        />
        <VideoPlayer
          selectedVideo={videos[selectedVideoIndex]}
          markVideoComplete={markVideoComplete}
        />
      </div>
    </>
  );
};

export default VideoLesson;

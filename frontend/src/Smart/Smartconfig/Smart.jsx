import React, { useState } from "react";
import {
  connectWallet,
  completeTask,
} from "../../Smart/Smartconfig/blockchain.js";

const Smart = () => {
  const [address, setAddress] = useState("");

  const handleConnect = async () => {
    try {
      // Connect wallet
      const { userAddress } = await connectWallet();
      setAddress(userAddress);
      console.log("Connected Address:", userAddress);
    } catch (error) {
      console.error("Error during wallet connection:", error.message);
    }
  };

  const handleCompleteTask = async () => {
    if (!address) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const { signer } = await connectWallet(); // Ensure signer is obtained
      await completeTask(signer, address);
      alert("Task completed successfully! Reward has been credited.");
    } catch (error) {
      console.error("Error completing task:", error.message);
      alert("Failed to complete the task. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleConnect}
        style={{ padding: "10px 20px", fontSize: "16px", marginBottom: "20px" }}
      >
        Connect Wallet
      </button>
      {address && <p>Connected Address: {address}</p>}
      <button
        onClick={handleCompleteTask}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Complete Task
      </button>
    </div>
  );
};

export default Smart;

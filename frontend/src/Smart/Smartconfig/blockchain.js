import { ethers } from "ethers";
import config from "../config/config.js";

// Connect Wallet Function
export const connectWallet = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed. Please install it to proceed.");
  }

  // Request access to the wallet
  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const userAddress = await signer.getAddress();

  console.log("Wallet connected:", userAddress);
  return { provider, signer, userAddress };
};

// Complete Task Function
export const completeTask = async (signer, userAddress) => {
  const earningManager = new ethers.Contract(
    config.contracts.earningManager.address,
    config.contracts.earningManager.abi,
    signer
  );

  const reward = ethers.parseEther("0.0001"); // Define the reward amount
  console.log(
    `Completing task for user: ${userAddress} with reward: ${reward}`
  );

  const tx = await earningManager.completeTask(userAddress, reward);
  await tx.wait();

  console.log("Task completed successfully!");
};

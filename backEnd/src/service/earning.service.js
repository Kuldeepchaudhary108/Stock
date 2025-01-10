import { ethers } from "ethers";
import config from "../Smart/config/config.js";

const provider = new ethers.JsonRpcProvider(
  "https://rpc.open-campus-codex.gelato.digital"
);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const earningManagerContract = new ethers.Contract(
  config.contracts.earningManager.address,
  config.contracts.earningManager.abi,
  signer
);

// Reward User for Completing Task
export const rewardUserForTask = async (userAddress, rewardAmount) => {
  try {
    // const rewardInWei = ethers.parseUnits(rewardAmount.toString(), 18);
    // const tx = await earningManagerContract.completeTask(
    //   userAddress,
    //   rewardInWei
    // );
    // await tx.wait();
    // return tx.hash;
    if (userAddress && rewardAmount) {
      console.log("yea all things are working ");
    }
  } catch (error) {
    console.error("Error in rewardUserForTask:", error.message);
    throw new Error("Failed to reward user for task.");
  }
};

// Get Real Token Balance
export const getRealTokenBalance = async (userAddress) => {
  try {
    const balance = await earningManagerContract.getRealTokenBalance(
      userAddress
    );
    return ethers.formatUnits(balance, 18); // Convert to readable format
  } catch (error) {
    console.error("Error in getRealTokenBalance:", error);
    throw new Error("Failed to fetch balance.");
  }
};

import { ethers } from "ethers";
import config from "../Smart/config/config.js";

const provider = new ethers.JsonRpcProvider("https://rpc.open-campus-codex.gelato.digital");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const learningManagerContract = new ethers.Contract(
  config.contracts.learningManager.address,
  config.contracts.learningManager.abi,
  signer
);

// Complete Course and Reward User
export const completeCourse = async (userAddress, rewardAmount) => {
  try {
    const rewardInWei = ethers.parseUnits(rewardAmount.toString(), 18);
    const tx = await learningManagerContract.completeCourse(userAddress, rewardInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in completeCourse:", error.message);
    throw new Error("Failed to complete course.");
  }
};

// Check if User Completed the Course
export const hasCompletedCourse = async (userAddress) => {
  try {
    return await learningManagerContract.hasCompletedCourse(userAddress);
  } catch (error) {
    console.error("Error in hasCompletedCourse:", error.message);
    throw new Error("Failed to check course completion.");
  }
};

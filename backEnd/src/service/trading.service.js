import { ethers } from "ethers";
import config from "../Smart/config/config.js";

const provider = new ethers.JsonRpcProvider("https://rpc.open-campus-codex.gelato.digital");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const tradingManagerContract = new ethers.Contract(
  config.contracts.tradingManager.address,
  config.contracts.tradingManager.abi,
  signer
);

// Deposit Test Tokens
export const depositTestTokens = async (userAddress, amount) => {
  try {
    const amountInWei = ethers.parseUnits(amount.toString(), 18);
    const tx = await tradingManagerContract.depositTestTokens(userAddress, amountInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in depositTestTokens:", error.message);
    throw new Error("Failed to deposit test tokens.");
  }
};

// Simulate Trade
export const simulateTrade = async (userAddress, profitPercent) => {
  try {
    const tx = await tradingManagerContract.simulateTrade(userAddress, profitPercent);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in simulateTrade:", error.message);
    throw new Error("Failed to simulate trade.");
  }
};

// Get Trade Growth
export const getTradeGrowth = async (userAddress) => {
  try {
    return await tradingManagerContract.getTradeGrowth(userAddress);
  } catch (error) {
    console.error("Error in getTradeGrowth:", error.message);
    throw new Error("Failed to fetch trade growth.");
  }
};

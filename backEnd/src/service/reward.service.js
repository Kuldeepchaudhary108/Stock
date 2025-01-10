import { ethers } from "ethers";
import config from "../Smart/config/config.js";

const provider = new ethers.JsonRpcProvider(
  "https://rpc.open-campus-codex.gelato.digital"
);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const rewardTokenContract = new ethers.Contract(
  config.contracts.rewardToken.address,
  config.contracts.rewardToken.abi,
  signer
);

// Mint Tokens
export const mintTokens = async (to, amount) => {
  try {
    const amountInWei = ethers.parseUnits(amount.toString(), 18);
    const tx = await rewardTokenContract.mint(to, amountInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in mintTokens:", error.message);
    throw new Error("Failed to mint tokens.");
  }
};

// Burn Tokens
export const burnTokens = async (from, amount) => {
  try {
    const amountInWei = ethers.parseUnits(amount.toString(), 18);
    const tx = await rewardTokenContract.burn(from, amountInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in burnTokens:", error.message);
    throw new Error("Failed to burn tokens.");
  }
};

import { ethers } from "ethers";
import config from "../Smart/config/config.js";

const provider = new ethers.JsonRpcProvider("https://rpc.open-campus-codex.gelato.digital");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const loanManagerContract = new ethers.Contract(
  config.contracts.loanManager.address,
  config.contracts.loanManager.abi,
  signer
);

// Request Loan
export const requestLoan = async (userAddress, amount) => {
  try {
    const amountInWei = ethers.parseUnits(amount.toString(), 18);
    const tx = await loanManagerContract.requestLoan(userAddress, amountInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in requestLoan:", error.message);
    throw new Error("Failed to request loan.");
  }
};

// Repay Loan
export const repayLoan = async (userAddress, amount) => {
  try {
    const amountInWei = ethers.parseUnits(amount.toString(), 18);
    const tx = await loanManagerContract.repayLoan(userAddress, amountInWei);
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in repayLoan:", error.message);
    throw new Error("Failed to repay loan.");
  }
};

// Check if Loan is Cleared
export const isLoanCleared = async (userAddress) => {
  try {
    return await loanManagerContract.isLoanCleared(userAddress);
  } catch (error) {
    console.error("Error in isLoanCleared:", error.message);
    throw new Error("Failed to check loan clearance.");
  }
};

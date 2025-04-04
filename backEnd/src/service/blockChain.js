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

// Service: Reward User for Completing Task
export const rewardUserForTask = async (userAddress, rewardAmount) => {
  try {
    const rewardInWei = ethers.parseUnits(rewardAmount.toString(), 18); // No 'utils' in v6

    const tx = await earningManagerContract.completeTask(
      userAddress,
      rewardInWei
    );
    await tx.wait();
    return tx.hash;
  } catch (error) {
    console.error("Error in rewardUserForTask:", error.message);
    throw new Error("Failed to complete the task.");
  }
};

// Service: Fetch User Token Balance
export const fetchUserBalance = async (userAddress) => {
  try {
    // Validate userAddress before making the contract call
    console.log(userAddress);

    console.log(earningManagerContract.target);
    const balance = await earningManagerContract.getRealTokenBalance(
      userAddress
    );

    return ethers.utils.formatUnits(balance, 18);
  } catch (error) {
    console.error("Error in fetchUserBalance:", error);
    throw new Error("Failed to fetch user balance.");
  }
};

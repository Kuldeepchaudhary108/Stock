// import { rewardUserForTask, fetchUserBalance } from "../service/blockChain.js";

// Controller: Complete Task
import { rewardUserForTask, fetchUserBalance } from "../service/blockChain.js";

export const completeTask = async (req, res) => {
  try {
    const { userAddress, rewardAmount } = req.body;

    // Reward the user for completing the task
    const transactionHash = await rewardUserForTask(userAddress, rewardAmount);

    // Fetch the updated balance
    const updatedBalance = await fetchUserBalance(userAddress);

    // Log the updated balance to the console
    console.log(`User Address: ${userAddress}`);
    console.log(`Updated Balance: ${updatedBalance} tokens`);

    // Respond to the client
    res.status(200).json({
      success: true,
      transactionHash,
      updatedBalance, // Include the updated balance in the response if needed
    });
  } catch (error) {
    console.error("Error completing task:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller: Get User Balance
export const getBalance = async (req, res) => {
  try {
    const { userAddress } = req.body;
    // console.log(userAddress);

    const balance = await fetchUserBalance(userAddress);
    res.status(200).json({ success: true, balance });
  } catch (error) {
    console.error("Error fetching balance:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

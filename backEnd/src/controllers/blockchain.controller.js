import { ApiResponse } from "../utils/ApiResponse.js";
import {
  rewardUserForTask,
  getRealTokenBalance,
} from "../service/earning.service.js";

export const completeTask = async (req, res) => {
  try {
    const { userAddress, rewardAmount } = req.body;

    // Reward the user for completing the task
    const transactionHash = await rewardUserForTask(userAddress, rewardAmount);

    // Fetch the updated balance
    const updatedBalance = await getRealTokenBalance(userAddress);

    // Log the updated balance to the console
    console.log(`User Address: ${userAddress}`);
    console.log(`Updated Balance: ${updatedBalance} tokens`);

    // Respond to the client
    res.status(200).json(
      new ApiResponse(202, {
        success: true,
        transactionHash,
        updatedBalance, // Include the updated balance in the response if needed
      }),
      "rewards grant successfully "
    );
  } catch (error) {
    console.error("Error completing task:", error.message);
    res.status(500).json(new ApiResponse(404, error.message));
  }
};

// Controller: Get User Balance
export const getBalance = async (req, res) => {
  try {
    const { userAddress } = req.body;
    // console.log(userAddress);

    const balance = await getRealTokenBalance(userAddress);
    res.status(200).json({ success: true, balance });
  } catch (error) {
    console.error("Error fetching balance:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

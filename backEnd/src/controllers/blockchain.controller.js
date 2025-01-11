import { ApiResponse } from "../utils/ApiResponse.js";
import {
  rewardUserForTask,
  getRealTokenBalance,
} from "../service/earning.service.js";
import { User } from "../models/user.model.js";

export const completeTask = async (req, res) => {
  try {
    const { userAddress, rewardAmount } = req.body;

    const transactionHash = await rewardUserForTask(userAddress, rewardAmount);

    const user = await User.findById(req.user?._id);
    user.tokens += 0.01;
    await user.save({ validateBeforeSave: false });

    // const updatedBalance = await getRealTokenBalance(userAddress);

    console.log(`User Address: ${userAddress}`);
    console.log(`Updated Balance: ${user.tokens} tokens`);

    res.status(200).json(
      new ApiResponse(202, {
        success: true,
        transactionHash,
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

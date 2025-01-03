import { Order } from "../models/Order.model.js";

import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

const getOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .sort({ createdAt: -1 })
    .populate("user stock");
  return res
    .status(202)
    .json(new ApiResponse(202, orders, "Holding retrived successfully"));
});

export { getOrder };

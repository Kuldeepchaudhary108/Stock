import { Holding } from "../models/holding.model.js";
import { Order } from "../models/Order.model.js";
import { Stock } from "../models/stock.model.js";
import { User } from "../models/user.model.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";

const buyStock = asyncHandler(async (req, res) => {
  const { stock_id, quantity, buyPrice } = req.body;

  if ([stock_id, quantity, buyPrice].some((field) => field === "")) {
    throw new ApiError(404, "All field are required ");
  }

  try {
    // const stock = await Stock.findById(stock_id);
    // const buyPrice = stock.currentPrice;
    const totalPrice = quantity * buyPrice;

    const currentUser = await User.findById(req.user._id);
    if (!currentUser) throw new ApiError(404, "User not found");
    if (currentUser.balance < totalPrice) {
      throw new ApiError(404, "Insufficent Balance");
    }

    currentUser.balance -= totalPrice;
    console.log(stock_id, quantity, buyPrice);

    await currentUser.save();
    const newHolding = await Holding.create({
      user: req.user._id,
      stock: stock_id,
      quantity,
      buyPrice,
    });

    const order = Order.create({
      user: req.user._id,
      stock: stock_id,
      quantity,
      price: buyPrice,
      type: "buy",
      remainingBalance: currentUser.balance,
    });

    return res
      .status(202)
      .json(new ApiResponse(202, newHolding, "Stock bought Successfully"));
  } catch (error) {
    throw new ApiError(404, "failed to buy stock");
  }
});
const sellStock = asyncHandler(async (req, res) => {
  const { holdingId, quantity } = req.body;

  if ([holdingId, quantity].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All Field is required");
  }

  try {
    const holding = await Holding.findById(holdingId);
    if (!holding) {
      throw new ApiError(404, "Holding not found");
    }
    if (quantity > holding.quantity) {
      throw new ApiError(400, "Invaild Quantity");
    }

    const stock = await Stock.findById(holding.stock._id);

    const selPrice = quantity * stock.currentPrice;
    const currentUser = await User.findById(holding.user);
    if (!currentUser) {
      throw new ApiError(404, "user not found");
    }
    currentUser.balance += selPrice;
    await currentUser.save();

    holding.quantity -= quantity;
    if (holding.quantity <= 0) {
      await Holding.findByIdAndDelete(holdingId);
    } else {
      await holding.save();
    }

    const order = new Order({
      user: holding.user,
      stock: holding.stock,
      quantity,
      price: holding.currentPrice,
      type: "sell",
      remainingBalance: currentUser.balance,
    });

    await order.save();

    return res
      .status(202)
      .jSON(new ApiResponse(202, {}, "Stock sold Successfully"));
  } catch (error) {
    throw new ApiError(404, "failed to buy stock");
  }
});

const getAllHolding = asyncHandler(async (req, res) => {
  //   console.log("holding user", req.user);
  const holding = await Holding.find({ user: req.user._id }).populate("stock");
  //   console.log(holding);
  return res
    .status(202)
    .json(new ApiResponse(202, holding, "Holding retrived successfully"));
});

export { getAllHolding, buyStock, sellStock };

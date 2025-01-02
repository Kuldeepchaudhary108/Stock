import mongoose, { Schema } from "mongoose";
import { ApiError } from "../utils/index.js";

const HoldingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stock: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    buyPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

HoldingSchema.methods.invested = function () {
  return this.quantity * this.buyPrice;
};

HoldingSchema.methods.getCurrentValue = async function () {
  const Stock = mongoose.model("Stock");
  const stock = await Stock.findById(this.stock);
  if (!stock) {
    throw new ApiError(404, "Associated stock not found");
  }
  return this.quantity * stock.currentPrice;
};

HoldingSchema.methods.getDayReturn = async function () {
  const Stock = mongoose.model("Stock");
  const stock = await Stock.findById(this.stock);
  if (!stock) {
    throw new ApiError(404, "Associated stock not found");
  }
  const dayReturn =
    (stock.currentPrice - stock.lastDayTraderPrice) / stock.lastDayTraderPrice;
  return Number(dayReturn.toFixed(2));
};  
export const Holding = mongoose.model("Holding", HoldingSchema);

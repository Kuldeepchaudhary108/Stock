import mongoose from "mongoose";

const { Schema } = mongoose;

const PortfolioSchema = new Schema(
  {
    stockHolder: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stocks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Stock", // Reference the Stock model
      },
    ],
    balance: {
      type: Number,
      required: true,
      default: 1000000,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

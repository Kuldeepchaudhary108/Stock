import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    tickerSymbol: {
      type: String,
      required: true,
      uppercase: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    tradeType: {
      type: String,
      required: true,
      enum: ["buy", "sell"], // Restrict trade type to "buy" or "sell"
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    averagePrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

export const Stock = mongoose.model("Stock", StockSchema);

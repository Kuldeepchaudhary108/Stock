import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      uppercase: true,
    },
    companyName: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    lastDayTraderPrice: {
      type: Number,
      required: true,
    },
    currentPrice: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export const Stock = mongoose.model("Stock", StockSchema);

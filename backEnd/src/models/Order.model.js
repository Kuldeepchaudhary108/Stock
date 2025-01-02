import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
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
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["buy", "sell"],
    },
    remainingBalance: {
      type: Number,
      required: true,
      set: function (value) {
        return parseFloat(value.toFixed(2));
      },
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Remaining balance cannot be negative.",
      },
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);

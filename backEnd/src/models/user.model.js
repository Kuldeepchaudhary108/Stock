import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // lowercase: true,
      trim: true,
    },

    firstName: {
      type: String,
      required: false,
      trim: true,
      index: true,
    },
    surName: {
      type: String,
      required: false,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    color: {
      type: Number,
      required: false,
    },

    password: {
      type: String,
      required: [true, "password is required"],
    },
    tokens: { type: Number, default: 10 },
    trades: { type: Number, default: 0 },
    returns: { type: Number, default: 0 },
    balance: {
      type: Number,
      default: 10000000,
    },

    refreshToken: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", UserSchema);

import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n MongoDB connected !! DB Host:${connectionInstance.connection.host} on port ${process.env.PORT}`
    );
  } catch (error) {
    console.error("mongoDb connnection failed :", error);
    process.exit(1);
  }
};

export default connectDB;

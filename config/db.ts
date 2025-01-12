import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("DB connected");
  } catch (error) {
    console.log(
      "Database connection error :",
      (error as Error).message,
      "\nStack trace :",
      (error as Error).stack
    );
  }
};

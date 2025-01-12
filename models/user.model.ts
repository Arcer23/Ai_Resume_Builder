import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [5, "Email must be atleast 5 characters long"],
    maxLength: [14, "Email must not be more than 14 characters"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
    minLength: [6, "Password must be atleast 6 characters long"],
  },
  roles: {
    type: String,
    enum: ["user", "admin"],
    defualt: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("user", userSchema);

userSchema.statics.hashPassword = async function (password: string) {
  return await bcrypt.hash(password, 7);
};

userSchema.methods.isValidPassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  if (!process.env.SECRET) {
    throw new Error("SECRET environment variable is not defined");
  }
  return await jwt.sign({ email: this.email }, process.env.SECRET, {
    expiresIn: "1h",
  });
};

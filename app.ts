import express from "express";
import { connectDB } from "./config/db";
import morgan from "morgan";
const app = express();
connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;

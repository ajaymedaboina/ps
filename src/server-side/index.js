import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes.js/user.js";
const app = express();
dotenv.config();
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true

}))
app.use(cookieParser())
app.use(express.json());
app.use("/auth", UserRouter);
mongoose.connect("mongodb+srv://medaboinaajaykumar47:1AMygKXkDh1QD6lt@placex.cujsem0.mongodb.net/?retryWrites=true&w=majority&appName=placex");
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

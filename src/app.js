import express from "express"
import productRouter from "./routers/product"
import authRouter from "./routers/auth"
import mongoose from "mongoose";
const app = express();
app.use(express.json())
app.use("/api", productRouter)
app.use("/api", authRouter)
mongoose.connect("mongodb://localhost:27017/asm");
export const viteNodeApp = app;

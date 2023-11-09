import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

import userRoutes from "./routes/userRoutes.js";
app.use("/users", userRoutes);

import productRoutes from "./routes/productRoutes.js";
app.use("/products", productRoutes);

export default app;

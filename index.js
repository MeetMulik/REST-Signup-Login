import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

// Connect to DB
connectDB();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

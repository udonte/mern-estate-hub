import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log("server is running on port 3000!!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

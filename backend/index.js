// let express = require('express')

import express from "express";
import { PORT, dbURL } from "./config.js";
import mongoose from "mongoose";
import productRoute from "./Routes/productsRoute.js";
import usersRoute from "./Routes/usersRoutes.js";
import ordersRoute from "./Routes/ordersRoute.js";
// import { Product } from "./Models/productModel.js";
import cors from "cors";

let app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am from Server");
});

app.use("/", productRoute);
app.use("/", usersRoute);
app.use("/", ordersRoute);

// app.listen(PORT, () => {
//     console.log(`Server started in PORT  ${PORT}`);
//   });

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");

    app.listen(PORT, () => {
      console.log(`Server started in PORT  ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error");
  });

import express from "express";
import { Product } from "../Models/productModel.js";
let productRoute = express.Router();

productRoute.get("/getallproducts", async (req, res) => {
  try {
    let allProducts = await Product.find({});
    console.log(allProducts);
    return res.status(200).send(allProducts);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
});

productRoute.post("/getproductbyid", async (req, res) => {
  try {
    let productdata = await Product.findById({ _id: req.body.productid });
    console.log(productdata);
    return res.status(200).send(productdata);
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
});
export default productRoute;

const express = require("express");
const controllers = require("../controllers/products");

const productsRouter = express.Router();

productsRouter.get("/", controllers.getProducts);
module.exports = productsRouter;

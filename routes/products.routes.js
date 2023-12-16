// routes/products.routes.js
const express = require("express");
const { products:controller } = require("../controllers");
// const { validateJWT } = require("../middleware");

// const { secureAuthentication } = validateJWT;
const productsRouter = express.Router();

productsRouter.get("/", /* secureAuthentication, */ controller.getProducts);

productsRouter.get("/:categories",controller.getCategories)

module.exports = productsRouter;

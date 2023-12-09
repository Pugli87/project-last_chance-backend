const express = require("express");
const controllers = require("../controllers/products");
// const { validateJWT } = require("../middleware");

// const { secureAuthentication } = validateJWT;
const productsRouter = express.Router();

productsRouter.get("/", /* secureAuthentication, */ controllers.getProducts);

module.exports = productsRouter;

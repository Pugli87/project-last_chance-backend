const express = require("express");
const controllers = require("../controllers/products");
//const { validateJWT } = require("../middleware");

const productsRouter = express.Router();
//const { secureAuthentication } = validateJWT;

productsRouter.get("/", /*secureAuthentication,*/ controllers.getProducts);

module.exports = productsRouter;

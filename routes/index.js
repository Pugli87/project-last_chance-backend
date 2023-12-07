const express = require("express");
const productsRouter = require("./products.routes");
const auth = require("./test.routes");

const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use("/products", productsRouter);
  indexRouter.use("/test", auth);

  return indexRouter;
};

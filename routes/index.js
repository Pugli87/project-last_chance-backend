// routes/index.js
const express = require("express");
const productsRouter = require("./products.routes");
const usersRouter = require("./user.routes");
const listRouter = require("./listProducts.routes");

const indexRouter = express.Router();

module.exports = () => {
	indexRouter.use("/products", productsRouter);
	indexRouter.use("/users", usersRouter);
	indexRouter.use('/auth', usersRouter);
	indexRouter.use('/userProducts', listRouter);

	return indexRouter;
};

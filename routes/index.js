const express = require("express");
const productsRouter = require("./products.routes");
const auth = require("./test.routes");
const usersRouter = require("./user.routes");

const indexRouter = express.Router();

module.exports = () => {
	indexRouter.use("/products", productsRouter);
	indexRouter.use("/users", usersRouter);
	indexRouter.use('/auth', auth)
	return indexRouter;
};

// routes/index.js
const express = require("express");
const caloriasRouter = require("./calorias.routes");
const productsRouter = require("./products.routes");
const auth = require("./user.routes");
const usersRouter = require("./user.routes");
const listRouter = require("./listProducts.routes");

const indexRouter = express.Router();

module.exports = () => {
	indexRouter.use("/calorias",caloriasRouter );
	indexRouter.use("/products", productsRouter);
	indexRouter.use("/users", usersRouter);
	indexRouter.use('/auth', auth)
	indexRouter.use('/userProducts', listRouter)

	return indexRouter;
};


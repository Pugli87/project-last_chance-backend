const express = require("express");
const caloriasRouter = require("./calorias.routes"); 
const productsRouter = require("./products.routes");


const indexRouter = express.Router();

module.exports = () => {
	indexRouter.use("/calorias", caloriasRouter);
	indexRouter.use("/products", productsRouter);
	
	return indexRouter;
};

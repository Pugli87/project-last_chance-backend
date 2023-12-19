const express = require("express");
const caloriasRouter = require("./calorias.routes");
const productsRouter = require("./products.routes");
const usersRouter = require("./user.routes");
const listRouter = require("./listProducts.routes");
const caloriesPrivateRouter = require("./caloriesprivate.routes"); 

const indexRouter = express.Router();

module.exports = () => {
  indexRouter.use("/calorias", caloriasRouter);
  indexRouter.use("/products", productsRouter);
  indexRouter.use("/users", usersRouter);
  indexRouter.use("/auth", usersRouter);
  indexRouter.use("/userProducts", listRouter);
  indexRouter.use("/caloriesprivate", caloriesPrivateRouter); // Nueva ruta para caloriesprivate

  return indexRouter;
};



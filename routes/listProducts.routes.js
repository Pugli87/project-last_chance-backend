// routes/list.routes.js
const express = require("express");
const { listProducts: controller } = require("../controllers");
const listRouter = express.Router();
// const { validateJWT } = require("../middleware");

// const { secureAuthentication } = validateJWT;

listRouter.get(
  "/list/",
  /* secureAuthentication, */ controller.getListProducts
);

listRouter.get(
  "/listUser/",
  /* secureAuthentication, */ controller.getListProductsUser
);

listRouter.post("/", /* secureAuthentication, */ controller.postListProducts);

listRouter.delete(
  "/list/:id",
  /* secureAuthentication, */ controller.deleteListProducts
);

module.exports = listRouter;

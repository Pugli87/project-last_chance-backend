// routes/list.routes.js

const express = require("express");
const {listProducts: controller   } = require("../controllers");
const listRouter = express.Router();
// const { validateJWT } = require("../middleware");

// const { secureAuthentication } = validateJWT;

listRouter.get("/list", /* secureAuthentication, */ controller.getListProducts);
listRouter.post("/", /* secureAuthentication, */ controller.postListProducts);
listRouter.delete("/:id", /* secureAuthentication, */ controller.deleteListProducts);

module.exports = listRouter;



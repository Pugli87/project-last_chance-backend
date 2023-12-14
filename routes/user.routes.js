const express = require("express");
const { register: controller } = require("../controllers");
const usersRouter = express.Router();
const { validateJWT } = require("../middleware");
const { secureAuthentication } = validateJWT;

usersRouter.post("/signup", controller.register);
usersRouter.post("/login", controller.login);
usersRouter.post("/logout", secureAuthentication, controller.logout);

module.exports = usersRouter;

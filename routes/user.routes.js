const express = require("express");
const { register: controller } = require("../controllers");
const usersRouter = express.Router();
const { validateJWT } = require("../middleware");
const { auth } = require("../middleware");

usersRouter.post("/signup", controller.register);
usersRouter.post("/login", controller.login);
usersRouter.post("/logout", auth, controller.logout);

module.exports = usersRouter;

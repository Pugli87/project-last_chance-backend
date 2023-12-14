const express = require("express");
const {register: controller} = require("../controllers");
const usersRouter = express.Router();

usersRouter.post("/signup", controller.register);
usersRouter.post("/login", controller.login);
usersRouter.get("/logout", controller.logout);

module.exports = usersRouter;

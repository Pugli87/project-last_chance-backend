const express = require("express");
const {register: controller} = require("../controllers");
const usersRouter = express.Router();

usersRouter.post("/signup", controller.register);
usersRouter.post("/log-in", controller.login);
usersRouter.get("/log-out", controller.logout);

module.exports = usersRouter;

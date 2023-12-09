// routes/user.routes.js
const express = require("express");
const controller = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/signup", controller.register);
usersRouter.post("/log-in", controller.login);

module.exports = usersRouter;

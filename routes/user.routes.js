const express = require("express");
const controller = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/signup", controller.register);

module.exports = usersRouter;

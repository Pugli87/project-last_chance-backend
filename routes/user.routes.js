const express = require("express");
const controllers = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/signUp", controllers.register);

module.exports = usersRouter;

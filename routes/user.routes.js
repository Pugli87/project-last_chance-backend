// routes/user.routes.js
const express = require("express");
const controller = require("../controllers/users");
const usersRouter = express.Router();

usersRouter.post("/signup", controller.register);
usersRouter.post("/log-in", controller.login);
usersRouter.get("/log-out", controller.logout);
usersRouter.get("/verify/:verificationToken", controller.verifyUser); // token corre
usersRouter.post("/verify", controller.verifyUserEmail); // correo

module.exports = usersRouter;

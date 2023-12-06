const express = require("express");
const usersRouter = require("./users");

const indexRouter = express.Router();

module.exports = () => {
	indexRouter.use("/users", usersRouter);
	return indexRouter;
};

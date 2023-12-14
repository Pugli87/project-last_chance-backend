// service/index.js
const createUSer = require("./users");
const loginUser = require("./users");
const logoutUser = require("./users");
const products = require("./products");
const listProducts = require("./listProducts");

module.exports = {
	createUSer,
	listProducts,
	products,
	loginUser,
	logoutUser,
};

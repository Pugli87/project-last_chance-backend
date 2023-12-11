// service/index.js
const loginUser = require("./users");
const products = require("./products");
const listProducts = require("./listProducts");
const logoutUser = require("./users");

module.exports = {
	listProducts,
	products,
	loginUser,
	logoutUser,
};

// service/index.js
const loginUser = require("./users");
const products = require("./products");
const logoutUser = require("./users");

module.exports = {
	products,
	loginUser,
	logoutUser
};

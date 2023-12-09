// service/index.js
const loginUser = require("./users");
const products = require("./products");
const listProducts = require("./listProducts");

module.exports = {
	listProducts,
	products,
	loginUser,
};

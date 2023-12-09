// service/index.js
const test = require("./test");
const products = require("./products");
const listProducts = require("./listProducts");

module.exports = {
	listProducts,
	products,
	test,
};

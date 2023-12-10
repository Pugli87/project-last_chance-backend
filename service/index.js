// service/index.js
const recommendedCaloriesService = require ("./calorias")
const loginUser = require("./users");
const products = require("./products");

module.exports = {
	recommendedCaloriesService,
	products,
	loginUser,
};

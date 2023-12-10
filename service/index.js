// service/index.js
const recommendedCaloriesService = require ("./calorias")
const loginUser = require("./users");
const products = require("./products");
const logoutUser = require("./users");

module.exports = {
	recommendedCaloriesService,
	products,
	loginUser,
	logoutUser
};

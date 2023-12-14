const { Product } = require("./productSchema");
const User = require("./userSchema");
const { UserJoi } = require("./userJoiSchema");
const { ListProducts } = require("./listProductSchema");
const ListNotFood = require("./recommendedCalories");
const ListFood = require("./listFoodSchema");

module.exports = {
	Product,
	User,
	UserJoi,
	ListProducts,
	ListNotFood,
	ListFood,
};

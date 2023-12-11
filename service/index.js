// service/index.js
const recommendedCaloriesService = require("./calorias/recommendedCaloriesService");
const loginUser = require("./users");
const products = require("./products");
const listProducts = require("./listProducts");
const logoutUser = require("./users");

module.exports = {
  recommendedCaloriesService,
  listProducts, 
  products,
  loginUser,
  logoutUser,
};

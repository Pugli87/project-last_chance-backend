// controllers/index.js
const { login } = require("./users/loginUser");
const { products } = require("./products");
const { recommendedCaloriescontroller } = require("./calorias/recommendedCaloriescontroller");
const { listProducts } = require("./listProducts");

module.exports = {
  products,
  login,
  recommendedCaloriescontroller,
  listProducts,
};

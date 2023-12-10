// controllers/index.js
const { login } = require("./users/loginUser");
const { products } = require("./products");
const {recommendedCaloriescontroller} = require ("./calorias/recommendedCaloriescontroller")

module.exports = {
  products,
  login,
  recommendedCaloriescontroller,
};

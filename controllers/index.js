// controllers/index.js
const register = require("./users");
const login = require("./users");
const products = require("./products");
const listProducts = require("./listProducts");
const recommendedCaloriescontroller = require ("./recommendedCaloriescontroller");

module.exports = {
  register,
  products,
  login,
  recommendedCaloriescontroller,
  listProducts,
};

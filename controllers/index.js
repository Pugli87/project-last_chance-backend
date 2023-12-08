// controllers/index.js
const login = require("./users/loginUser");
const { products } = require("./products");

module.exports = {
  products,
  login,
};

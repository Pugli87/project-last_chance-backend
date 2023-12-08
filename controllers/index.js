// controllers/index.js
const login = require("./users");
const { products } = require("./products");

module.exports = {
  products,
  login,
};

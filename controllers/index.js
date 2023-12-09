// controllers/index.js
const  login  = require("./users/loginUser");
const  products  = require("./products");
const  listProducts  = require("./listProducts");

module.exports = {
  products,
  login,
  listProducts,
};

// ./controller/listProducts/index.js
const getListProductsUser = require("./getListProductsUser");
const getListProducts = require("./getListProducts");
const deleteListProducts = require("./deleteListProducts");
const postListProducts = require("./postListProducts");

module.exports = {
  getListProductsUser,
  getListProducts,
  deleteListProducts,
  postListProducts,
};

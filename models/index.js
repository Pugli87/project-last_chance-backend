// models/index.js
const { Product } = require("./productSchema");
const User = require("./userSchema");
const { UserJoi } = require("./userJoiSchema");
const { ListProducts } = require("./listProductSchema");
const { Category } = require ("./CategoriesSchema")

module.exports = {
  Product,
  User,
  UserJoi,
  ListProducts,
  Category,
};

// middelware/index.js
const errorHandler = require("./errorHandler");
const notFound = require("./notFound");
const  recommendedCaloriesMiddleware =require("./recommendedCaloriesMiddleware");


module.exports = {
  errorHandler,
  notFound,
  recommendedCaloriesMiddleware,
};

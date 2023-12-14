// middelware/index.js
const errorHandler = require("./errorHandler");
const notFound = require("./notFound");
const validateJWT = require("./validateJWT");

module.exports = {
	errorHandler,
	notFound,
	validateJWT,
};

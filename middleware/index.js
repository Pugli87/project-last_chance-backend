// middelware/index.js
const errorHandler = require("./errorHandler");
const notFound = require("./notFound");
const validateJWT = require("./validateJWT");
const auth = require("./auth");

module.exports = {
	errorHandler,
	notFound,
	validateJWT,
	auth,
};

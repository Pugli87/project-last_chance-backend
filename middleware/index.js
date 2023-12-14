// middelware/index.js
const errorHandler = require("./errorHandler");
const notFound = require("./notFound");
const { auth } = require("./validateJWT");

module.exports = {
	errorHandler,
	notFound,
	auth,
};

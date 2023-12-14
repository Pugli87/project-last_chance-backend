const createUser = require("./createUser");
const { login } = require("./loginUser");
const verifyUserEmail = require("./verifyUserEmail");
const verifyUser = require("./verifyUser");
const { logout } = require("./logoutUser");

module.exports = {
	createUser,
	login,
	verifyUserEmail,
	verifyUser,
	logout,
};

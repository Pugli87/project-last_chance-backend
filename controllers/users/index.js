const register = require("./register");
const {login} = require('./loginUser')
const {logout} = require('./logoutUser')

module.exports = {
	register,
	login,
	logout,
};

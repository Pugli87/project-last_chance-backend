const register = require("./register");
const { login } = require("./loginUser");
const { logout } = require("./logoutUser");
const verifyUserEmail = require("./verifyUserEmail");
const verifyUser = require("./verifyUser");

module.exports = {
  register,
  login,
  logout,
  verifyUserEmail,
  verifyUser
};

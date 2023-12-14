const createUser = require("./createUser");
const { login } = require("./loginUser");
const verifyUserEmail = require("./verifyUserEmail");
const verifyUser = require("./verifyUser");

module.exports = {
  createUser,
  login,
  verifyUserEmail,
  verifyUser,
};

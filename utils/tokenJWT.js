// utils/token.js
const jwt = require("jsonwebtoken");
const moment = require("moment");
const { SECRET_KEY } = require("./variables");

const generateToken = (isUserExist) => {
  // encrypted data
  const token = jwt.sign(
    {
      id: isUserExist._id,
      name: `${isUserExist.name}`,
      email: isUserExist.email,
      iat: moment().unix(),
      exp: moment().add(2, "hours").unix(),
    },
    SECRET_KEY
  );
  return token;
};

module.exports = {
  generateToken,
};

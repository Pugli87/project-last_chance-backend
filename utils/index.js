// utils/index.js
const { transporter } = require("./nodemailer");
const { apiSpecification } = require("./swagger");
const variables = require("./variables");
const tokenJWT = require("./tokenJWT");
const emailSender = require("./emailSender");

module.exports = {
  transporter,
  apiSpecification,
  variables,
  tokenJWT,
  emailSender,
};

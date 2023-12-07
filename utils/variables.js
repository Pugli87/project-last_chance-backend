// utils/variables.js
require("dotenv").config();

const PORT = process.env.PORT || 3100;
const DB_HOST = process.env.DB_HOST;
const SECRET_KEY = process.env.SECRET_KEY;
// const USEREMAIL = process.env.USEREMAIL;
// const USERPASSWORD = process.env.USERPASSWORD;
// const EMAIL_SEND = process.env.EMAIL_SEND;
// const PASSWORD_SEND = process.env.PASSWORD_SEND;

module.exports = {
  PORT,
  DB_HOST,
  SECRET_KEY,
  // USEREMAIL,
  // USERPASSWORD,
  // EMAIL_SEND,
  // PASSWORD_SEND,
};

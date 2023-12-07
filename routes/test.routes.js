const express = require("express");
const { test } = require("../controllers");

const auth = express.Router();

auth.post("/log-in", test.login);

module.exports = auth;

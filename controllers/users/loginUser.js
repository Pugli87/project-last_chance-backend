// service/test.js
const { test } = require("../../service");

const login = async (req, res) => {
  try {
    const { email, password /* active */ } = req.body;
    console.log(email);
    const { success, result, message } = await test.login(
      // email,
      // password,
      // active
      email,
      password
    );

    if (!success) {
      if (message === "Email or password is wrong") {
        return res.status(401).json({
          result,
          message,
        });
      } else {
        return res.status(400).json({
          result,
          message,
        });
      }
    }

    return res.status(200).json({
      result,
      message,
    });
  } catch (error) {
    return res.status(500).json({
      result: null,
      message: error,
    });
  }
};

module.exports = {
  login,
};

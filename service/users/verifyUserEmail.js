// services\deleteListProducts.js
const { User } = require("../../models");
const { emailSender: send } = require("../../utils");

const verifyUserEmail = async (email) => {
  try {
    if (!email) {
      return {
        success: false,
        result: null,
        message: "missing required field email",
      };
    }
    const isUserExist = await User.findOne({
      email,
    });

    if (!isUserExist) {
      return {
        success: false,
        result: null,
        message: "User not found",
      };
    }

    if (isUserExist.verify) {
      return {
        success: false,
        result: null,
        message: "Verification has already been passed",
      };
    }

    await send.confirmedActivationEmail(isUserExist);

    return {
      success: true,
      result: {
        User: {
          name: isUserExist.name,
          email: isUserExist.email,
        },
      },
      message: "verification email is sent.",
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = verifyUserEmail;

// services\deleteListProducts.js
const { User } = require("../../models");
const { emailSender: send } = require("../../utils");

const verifyUser = async (id) => {
  try {
    const verificationToken = id;
    const user = await User.findOne({ verificationToken });

    if (!user) {
      return {
        success: false,
        result: null,
        message: `User not found`,
      };
    }

    await User.updateOne(
      {
        verificationToken,
      },
      {
        $set: {
          verificationToken: null,
          verify: true,
        },
      },
      { upsert: true }
    );
    const { email, name } = user;

    await send.sendVerificationEmail(user);

    return {
      success: true,
      result: {
        email,
        name,
      },
      message: `Verification successful.`,
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = verifyUser;

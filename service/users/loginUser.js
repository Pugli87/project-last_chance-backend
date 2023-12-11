const { tokenJWT } = require("../../utils");
const bcrypt = require('bcrypt');
const User = require('../../models/userSchema')

const login = async (data) => {
  try {
    //Valida si el usuario existe
    const isUser = await User.findOne({
      email: data.email,
    })
    if (!isUser) {
      return
    }

    //Valida si la contraseña es correcta
    const isPassword = await bcrypt.compare(data.password, isUser.password);
    if (!isPassword) {
      return
    }
    const token = tokenJWT.generateToken(isUser);

    await User.findByIdAndUpdate({ email: isUser.email }, { token })
    return {
      token,
      User: {
        email: isUser.email,
      }
    }
  } catch (error) {
    console.log("errp", error);

    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = {
  login,
};
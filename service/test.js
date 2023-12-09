const { tokenJWT } = require("../utils");

const login = async (email, password) => {
  try {
    // son solo valores de prueba aca deben aparecer los de la consulta a la base de datos
    const isUserExist = {
      _id: "123",
      name: "John",
      email: "test@test.com",
      // ... otros datos
    };
    console.log(email, password);
    console.log(isUserExist);

    // generate the token
    const token = tokenJWT.generateToken(isUserExist);
    console.log(token);

    return {
      success: true,
      result: {
        Token: token,
        User: {
          _id: isUserExist._id,
          name: isUserExist.name,
          email: isUserExist.email,
        },
      },
      message: "Login successfully",
    };
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

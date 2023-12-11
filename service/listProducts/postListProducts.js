// service/listProducts/postListProducts.js
const { ListProducts } = require("../../models");

const postListProducts = async (Data) => {
  try {
    const idProduct = Data.idProduct;

    if (!idProduct) {
      return {
        success: false,
        result: null,
        message: "Product not found",
      };
    }

    const createdUser = await ListProducts.create({
      ...Data,
    });

    return {
      success: true,
      result: createdUser,
      message: "Product successfully added.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = postListProducts;

// service/listProducts/getListProducts.js
const { ListProducts } = require("../../models");

const getListProducts = async (query, skip, limit) => {
  try {
    const product = await ListProducts.find(query).skip(skip).limit(limit);

    if (!product) {
      return {
        success: false,
        result: null,
        message: `No products found.`,
      };
    }
    return {
      success: true,
      result: product,
      message: `product Found.`,
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = getListProducts;

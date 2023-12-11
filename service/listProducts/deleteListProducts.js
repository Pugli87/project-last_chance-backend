// services\deleteListProducts.js
const { ListProducts } = require("../../models");

const deleteListProducts = async (_id, owner) => {
  try {
    if (!_id) {
      return {
        success: false,
        result: null,
        message: "Invalid ID",
      };
    }
    const contactDelete = await ListProducts.findByIdAndDelete({ _id, owner });

    if (!contactDelete) {
      return {
        success: false,
        result: null,
        message: "Contact not found",
      };
    }

    return {
      success: true,
      result: contactDelete,
      message: "Product deletion successful",
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: error,
    };
  }
};

module.exports = deleteListProducts;

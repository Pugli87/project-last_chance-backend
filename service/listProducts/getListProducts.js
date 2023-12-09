// services\getListProducts.js
const { ListProducts } = require('../../models');

const getListProducts = async (query, skip, limit) => {
  try {
    const contact = await ListProducts.find(query).skip(skip).limit(limit);

    if (!contact) {
      return {
        success: false,
        result: null,
        message: `No contacts found for owner:`,
      };
    }
    return {
      success: true,
      result: contact,
      message: `Contacts Found`,
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

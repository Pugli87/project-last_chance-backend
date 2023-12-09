// services\deleteListProducts.js
// const { ListProducts } = require('../../models');

const deleteListProducts = async (req, res, next) => {
	try {
		console.log(Data);
		const idProduct = Data.idProduct;
		// const Data.title = "test"
	
		// const listProductUser = await ListProducts.find({
		// 	idProduct,
		// });
		// console.log(listProductUser);
	
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
	
		// console.log("log", createdUser);
	
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
module.exports = deleteListProducts;

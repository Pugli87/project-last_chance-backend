/*Product.find() */
const { Product } = require("../models");

const listProducts = async () => {
	try {
		const listProducts = await Product.find();
		console.log(listProducts);
		return listProducts;
	} catch (error) {
		console.log("Error de servicio", error);
	}
};

module.exports = {
	listProducts,
};

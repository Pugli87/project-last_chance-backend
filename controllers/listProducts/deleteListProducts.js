const {listProducts: service} = require("../../service");

const deleteListProducts = async (req, res, next) => {
	console.log(service);
	try {
		// const { page = 1, limit = 20 } = req.query;
		// const skip = (page - 1) * limit;
		// const products = await service.listProducts(skip, limit);

		// if (products) {
		// 	res.status(200).json(products);
		// } else {
		// 	res.status(404).json({ message: "Not found" });
		// }
	} catch (error) {
		next(error);
	}
};

module.exports = deleteListProducts;

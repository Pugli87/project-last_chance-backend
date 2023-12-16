const { Product } = require("../../models")
const getCategories = async (req, res) => {
    console.log("products");
    const categories = req.params.categories;
    console.log(categories);
    try {
        if (!categories) {
            return res.status(400).json({ message: 'Por favor, proporciona un categoria para buscar productos.' });
        }

        const products = await Product.find({ categories: categories });
        console.log(products.length)
        if (products.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos con ese categoria.' });
        }

        return res.status(200).json({ products });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
}
module.exports = getCategories
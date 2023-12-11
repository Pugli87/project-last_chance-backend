// ./controller/listProducts/deleteListProducts.js
const {listProducts: service} = require("../../service");

const deleteListProducts = async (req, res, next) => {
	try {
		// test eliminar
		if (!req.user) {
			req.user = {};
		  }
		  // id user
		  req.user.Id = "5d51694902b2373622ff5726";
		
		const owner = req.user.Id;
		console.log(owner);
		const { id } = req.params;
	
		const { success, result, message } = await service.deleteListProducts(id, owner);
	
		if (!success) {
		  return res.status(400).json({
			result,
			message,
		  });
		}
	
		return res.status(200).json({
		  result,
		  message,
		});
	  } catch (error) {
		return res.status(500).json({
		  result: null,
		  message: error,
		});
	  }
};

module.exports = deleteListProducts;

/**
 * @swagger
 * /api/userProducts/list/:id:
 *   delete:
 *     security:
 *       - BearerAuth: []
 *     summary: Delete a product from the user's list
 *     description: Delete a product from the user's list.
 *     tags:
 *       - ListProducts DELETE
 *  #  requestBody:
 *  #    description: List registration details
 *  #    required: true
 *  #    content:
 *  #      application/json:
 *  #        schema:
 *  #           $ref: '#/components/schemas/SchemaListProducts'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to be deleted
 *     responses:
 *       200:
 *           description: ListProduct registration successful
 *           content:
 *             application/json:
 *               example:
 *                 result:  {
 *                   "_id": ObjectId(),
 *                   "idProduct": "5d51694902b2373622ff5726",
 *                   "owner": "5d51694902b2373622ff5726",
 *                   "title": "Pan",
 *                   "weight": "100",
 *                   "calories": "210",
 *                   "groupBloodNotAllowed": [ true ],
 *                   "updatedAt": "2023-01-01T12:00:00Z",
 *                   "createdAt": "2023-01-01T12:00:00Z" 
 *                 }
 *               message: "Product successfully deleted."
 *       400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Product not found."
 *       500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Internal server error."
 */

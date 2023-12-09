const { listProducts: service } = require("../../service");

const getListProducts = async (req, res, next) => {
  try {
    const owner = req.user.Id;
    const { skip, limit } = req.query;

    const query = { owner };

    const { success, result, message } = await service.getListProducts(
      query,
      skip,
      limit
    );

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
    next(error);
  }
};

module.exports = getListProducts;


/**
 * @swagger
 * /api/userProducts/list:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     summary: register a new product
 *     description: register a new product in the user's list.
 *     tags:
 *       - ListProducts GET
 *     requestBody:
 *       description: List registration details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/SchemaListProducts'
 *     responses:
 *       201:
 *           description: ListProduct registration successful
 *           content:
 *             application/json:
 *               example:
 *                 result: { "List": { "_id": ObjectId(),"idProduct": "5d51694902b2373622ff5726", "owner": "5d51694902b2373622ff5726", "title": "Pan", "weight": "100", "calories": "210", "groupBloodNotAllowed": [ true ] } }
 *                 message: "product successfully added."
 *       400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Product not found)"
 *       500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Internal server error"
 */

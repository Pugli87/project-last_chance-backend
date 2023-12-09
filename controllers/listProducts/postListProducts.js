const { listProducts: service } = require("../../service");

const postListProducts = async (req, res) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    // const payload = jwt.verify(token, SECRET_KEY);
    // req.body.owner = payload.Id;

    const { success, result, message } = await service.postListProducts(
      req.body
    );

    if (!success) {
      return res.status(400).json({
        result,
        message,
      });
    }

    return res.status(201).json({
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

module.exports = postListProducts;

/**
 * @swagger
 * /api/userProducts/:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     summary: register a new product
 *     description: register a new product in the user's list.
 *     tags:
 *       - POST-Products
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

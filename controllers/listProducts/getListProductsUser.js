// ./controller/listProducts/getListProductsUser.js
const { listProducts: service } = require("../../service");

const getListProductsUser = async (req, res, next) => {
  try {
    // test eliminar
    if (!req.user) {
      req.user = {};
    }
    req.user.Id = "5d51694902b2373622ff5726";

    const owner = req.user.Id;
    const { skip, limit } = req.query;

    const query = { owner };

    const { success, result, message } = await service.getListProductsUser(
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

module.exports = getListProductsUser;

/**
 * @swagger
 * /api/userProducts/listUser/:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     summary: List User Products
 *     description: Retrieve a list of user products with optional pagination.
 *     tags:
 *       - ListProductsUser GET
 *     parameters:
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Number of items to skip. (Optional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items to return. (Optional)
 *     responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 result:
 *                   - _id: ObjectId()
 *                     title: Pan
 *                     weight: 100
 *                     calories: 210
 *                     groupBloodNotAllowed: [true]
 *                     updatedAt: "2023-01-01T12:00:00Z"
 *                     createdAt: "2023-01-01T12:00:00Z"
 *                   - _id: ObjectId()
 *                     title: Pan
 *                     weight: 100
 *                     calories: 210
 *                     groupBloodNotAllowed: [true]
 *                     updatedAt: "2023-01-01T12:00:00Z"
 *                     createdAt: "2023-01-01T12:00:00Z"
 *                 message: Product(s) found.
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Bad request."
 *         500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Internal server error."
 */

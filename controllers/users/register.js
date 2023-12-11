const service = require("../../service/users/createUser");
const validSchema = require("../../models/userJoiSchema");

const signUp = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { error } = validSchema.userJoiValidations(body);
    if (error !== undefined) {
      res
        .status(400)
        .send({ message: "Joi or other validation library error" });
    } else {
      const result = await service.createUser(body);
      if (!result) {
        res.status(409).send({ message: "Email in use" });
      } else {
        res.status(201).json(result);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      result: null,
      message: error,
    });
  }
};

module.exports = signUp;

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Register a new user and send a confirmation email.
 *     tags:
 *       - Users POST
 *     requestBody:
 *       description: User registration details
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchemaUser'
 *     responses:
 *       201:
 *         description: User registration successful
 *         content:
 *           application/json:
 *             example:
 *               result: {
 *                   "_id": ObjectId(),
 *                   "name": "John Doe",
 *                   "email": "john@example.com",
 *                   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *                   "verify": false,
 *                   "verificationToken": "a7ee51a1-458d-4ed0-9365-28739b634c8c",
 *                   "updatedAt": "2023-01-01T12:00:00Z",
 *                   "createdAt": "2023-01-01T12:00:00Z"
 *                 }
 *               message: "User registration successful. Confirmation email sent."
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               result: null
 *               message: "Joi or other validation library error"
 *       409:
 *         description: Email in use
 *         content:
 *           application/json:
 *             example:
 *               result: null
 *               message: "Email in use"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             example:
 *               result: null
 *               message: "Internal server error"
 */


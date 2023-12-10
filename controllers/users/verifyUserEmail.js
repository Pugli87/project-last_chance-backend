// ./controller/listProducts/getListProductsUser.js
const {loginUser: service} = require("../../service");
// const service = require("../../service/users/createUser");

const verifyUserEmail = async (req, res) => {
    try {
      const { email } = req.body;
  
      const { success, result, message } =  await service.verifyUserEmail(email);
  
      if (!success) {
        if (message === "Verification has already been passed") {
          return res.status(404).json({
            result,
            message,
          });
        } else {
          return res.status(400).json({
            result,
            message,
          });
        }
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

  module.exports = verifyUserEmail;

  /**
 * @swagger
 * /api/users/verify/:
 *   post:
 *     summary: Resend confirmation email
 *     description: Resend mail for users who have not yet confirmed their email.
 *     tags:
 *       - SendEmail POST
 *     requestBody:
 *       description: Email address of the user to resend the verification email.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *             required:
 *               - email
 *     responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 result:
 *                   User:
 *                     name: Name
 *                     email: test@TEST.com
 *                 message: verification email is sent.
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Bad request or missing required field."
 *         404:
 *           description: User not found or verification already passed
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "User not found or verification has already been passed."
 *         500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Internal server error."
 */

// ./controller/listProducts/getListProductsUser.js
const { loginUser: service } = require("../../service");
const { emailSender: send } = require("../../utils");

const verifyUser = async (req, res) => {
  try {
    const id = req.params.verificationToken;

    const { success, result, message } = await service.verifyUser(id);

    if (!success) {
      return res.status(404).json({
        result,
        message,
      });
    }

    // If it is a browser it is sent and it is different from postman it is sent html
    if (
      req.accepts("html") &&
      !req.get("User-Agent").includes("Postman") &&
      !req.get("User-Agent").includes("Swagger")
    ) {
      const results = await send.sendVerificationEmailHTML(result);
      res.setHeader("Content-Type", "text/html");

      return res.status(200).send(results);
    }

    return res.status(200).json({
      result,
      message,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      result: null,
      message: error,
    });
  }
};

module.exports = verifyUser;

/**
 * @swagger
 * /api/users/verify/{verificationToken}:
 *   get:
 *     summary: Confirmation of registration
 *     description: Sending email to confirm registration.
 *     tags:
 *       - ConfirmRegistration GET
 *     parameters:
 *       - in: path
 *         name: verificationToken
 *         required: true
 *         schema:
 *           type: string
 *         description: Verification token is obligatory
 *     responses:
 *         200:
 *           description: Successful response
 *           content:
 *             application/json:
 *               example:
 *                 result:
 *                   - name: John Doe
 *                     email: john@example.com
 *                 message: Verification successful.
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Bad request."
 *         404:
 *           description: User not found
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "User not found."
 *         500:
 *           description: Internal server error
 *           content:
 *             application/json:
 *               example:
 *                 result: null
 *                 message: "Internal server error."
 */

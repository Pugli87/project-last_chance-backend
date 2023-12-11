const joi = require("joi");

const userJoiValidations = (body) => {
	const Schema = joi.object({
		name: joi.string().required(),
		email: joi.string().email().required(),
		password: joi.string().required(),
	});
	return Schema.validate(body);
};

const loginJoiValidations = (body) => {
	const Schema = joi.object({
		email: joi.string().email().required(),
		password: joi.string().required(),
	});
	return Schema.validate(body);
};

module.exports = {
	userJoiValidations,
	loginJoiValidations,
	userJoiValidations,
};

/**
 * @swagger
 * components:
 *   schemas:
 *      SchemaJoiUserValidation:
 *          type: object
 *          properties:
 *               name:
 *                 type: string
 *                 description: User's name (required)
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address (required)
 *               password:
 *                 type: string
 *                 description: User's password (required)
 *          required:
 *            - name
 *            - email
 *            - password
 */

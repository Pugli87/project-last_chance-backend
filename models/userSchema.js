const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
		},
		token: {
			type: String,
			default: null,
		},
		verify: {
			type: Boolean,
			default: false,
		},
		verificationToken: {
			type: String,
			default: null,
			// required: [true, "Verify token is required"],
		},
	},
	{ versionKey: false, timestamps: true }
);

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaUser:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - token
 *            - verify
 *            - verificationToken
 *          properties:
 *               _id:
 *                 type: string
 *                 format: objectId
 *                 unique: true
 *                 description: User ID
 *               name:
 *                 type: string
 *                 unique: false
 *                 description: Set name for User
 *               email:
 *                 type: string
 *                 unique: true
 *                 description: Set email for User
 *               password:
 *                 type: string
 *                 unique: false
 *                 description: Set password for User
 *               token:
 *                 type: string
 *                 unique: false
 *                 description: Set token for User
 *               verify:
 *                 type: boolean
 *                 unique: false
 *                 description: Set verify for User
 *               verificationToken:
 *                 type: string
 *                 unique: false
 *                 description: Set verificationToken for User
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: Date and time when the User was created
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: Date and time when the User was last updated
 */

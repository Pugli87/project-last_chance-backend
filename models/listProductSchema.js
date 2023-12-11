// models/listProductSchema.js
const { Schema, model } = require("mongoose");

const listProductSchema = Schema(
  {
    idProduct: {
      type: String,
      unique: false,
    },
    owner: {
      type: String,
      unique: false,
    },
    title: {
      type: String,
      required: [true, "Set name for Product"],
      unique: false,
    },
    weight: {
      type: Number,
      required: [true, "Set weight for Product"],
      unique: false,
    },
    calories: {
      type: Number,
      required: [true, "Set calories for Product"],
      unique: false,
    },
    groupBloodNotAllowed: {
      type: [Boolean],
      unique: false,
      // required: [true, "Set groupBloodNotAllowed for Product"],
    },
    // createdProduct: {
    //   type: Date,
    // default: Date.now,
    // get: function (updatedAt) {
    //   return new Date(updatedAt).toLocaleDateString('es-ES');
    // },
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ListProducts = model("ListProducts", listProductSchema);

module.exports = {
  ListProducts,
};

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaListProducts:
 *          type: object
 *          required:
 *            - title
 *            - weight
 *            - calories
 *            - groupBloodNotAllowed
 *            - owner
 *          properties:
 *               _id:
 *                 type: string
 *                 format: objectId
 *                 unique: true
 *                 description: Product ID
 *               idProduct:
 *                 type: string
 *                 unique: false
 *                 description: Product Id
 *               owner:
 *                 type: string
 *                 unique: false
 *                 description: user to whom the product belongs
 *               title:
 *                 type: string
 *                 unique: false
 *                 description: Set name for Product
 *               weight:
 *                 type: number
 *                 unique: false
 *                 description: Set weight for Product
 *               calories:
 *                 type: number
 *                 unique: false
 *                 description: Set calories for Product
 *               groupBloodNotAllowed:
 *                 type: array
 *                 items:
 *                   type: boolean
 *                 unique: false
 *                 description: Set groupBloodNotAllowed for Product
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *                 description: Date and time when the product was created
 *               updatedAt:
 *                 type: string
 *                 format: date-time
 *                 description: Date and time when the product was last updated
 */

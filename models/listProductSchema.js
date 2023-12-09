// models/listProductSchema
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
      // type: Schema.Types.ObjectId,
      // ref: "userJoiValidations",
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
 */

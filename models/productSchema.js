const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    categories: {
      type: String,
    },
    weight: {
      type: String,
    },
    title: {
      type: String,
    },
    calories: {
      type: String,
    },
    groupBloodNotAllowed: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = {
  Product,
};

/**
 * @swagger
 * components:
 *   schemas:
 *      SchemaProduct:
 *          type: object
 *          properties:
 *               categories:
 *                 type: string
 *                 description: Product category
 *               weight:
 *                 type: string
 *                 description: Product weight
 *               title:
 *                 type: string
 *                 description: Product title
 *               calories:
 *                 type: string
 *                 description: Product calories
 *               groupBloodNotAllowed:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of groups not allowed for the product
 *          required:
 *            - title
 */

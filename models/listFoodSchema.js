const mongoose = require("mongoose");

const listFoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  finalWeightAmount: { type: Number, required: true },
  fatContent: { type: Number },
  sugarContent: { type: Number },
  sodiumContent: { type: Number },
});

const ListFood = mongoose.model("ListFood", listFoodSchema);

module.exports = ListFood;

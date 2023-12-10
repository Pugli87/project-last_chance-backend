const mongoose = require("mongoose");

const listFoodSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

const ListFood = mongoose.model("ListFood", listFoodSchema);

module.exports = ListFood;

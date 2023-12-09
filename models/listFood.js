const mongoose = require("mongoose");

const listFoodSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  // Otras propiedades según sea necesario
});

const ListFood = mongoose.model("ListFood", listFoodSchema);

module.exports = ListFood;
const mongoose = require("mongoose");

const listFoodSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  cantidadFinalPeso: { type: Number, required: true },
  contenidoGrasas: { type: Number },
  contenidoAzucar: { type: Number },
  contenidoSodio: { type: Number },
});

const ListFood = mongoose.model("ListFood", listFoodSchema);

module.exports = ListFood;

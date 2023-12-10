const mongoose = require("mongoose");

const recommendedCaloriesSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  peso: { type: Number, required: true },
  altura: { type: Number, required: true },
  edad: { type: Number, required: true },
  pesoDeseado: { type: Number, required: true },
  // Otras propiedades según sea necesario
});

const RecommendedCalories = mongoose.model("RecommendedCalories", recommendedCaloriesSchema);

module.exports = RecommendedCalories;

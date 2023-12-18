
const express = require("express");
const router = express.Router();
const controllers = require("../controllers/calorias/recommendedCaloriescontroller");

// Ruta para obtener la ingesta diaria de calorías
router.get("/daily-rate/:userId", controllers.getDailyCaloricIntake);

// Ruta para obtener la lista de alimentos no recomendados
router.get("/listNotFood", controllers.getNonRecommendedFoods);

module.exports = router;

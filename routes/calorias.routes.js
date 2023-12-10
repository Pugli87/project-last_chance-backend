const express = require("express");
const router = express.Router();
const controllers = require("../controllers/calorias/recommendedCaloriescontroller");

// Ruta para obtener la ingesta diaria de calorías
router.get("/ingestadiaria/:userId", controllers.obtenerIngestaDiaria);

// Ruta para obtener la lista de alimentos no recomendados
router.get("/alimentosnorecomendados", controllers.obtenerAlimentosNoRecomendados);

module.exports = router;

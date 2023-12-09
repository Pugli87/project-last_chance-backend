const express = require("express");
const router = express.Router();
const middleware = require("../../middleware/recommendedCaloriesMiddleware");
const controllers = require("../../controllers/calories/recommendedCaloriescontroller");

// Ruta para obtener la ingesta diaria de calorías
router.get("/ingestadiaria/:userId", middleware.withDatabaseConnection(controllers.obtenerIngestaDiaria));

// Ruta para obtener la lista de alimentos no recomendados
router.get("/alimentosnorecomendados", middleware.withDatabaseConnection(controllers.obtenerAlimentosNoRecomendados));

module.exports = router;

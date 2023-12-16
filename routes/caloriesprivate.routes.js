// routes/tusRutas.js

const express = require('express');
const router = express.Router();
const caloriesPrivate = require("../controllers/caloriesprivate");

// Ruta para obtener la ingesta diaria de calorías y alimentos no recomendados
router.get("/getDailyIntakeAndNonRecFoods", caloriesPrivate.getDailyIntakeAndNonRecFoods);

module.exports = router;

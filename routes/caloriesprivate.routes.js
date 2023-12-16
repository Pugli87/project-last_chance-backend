const express = require('express');
const router = express.Router();
const caloriesPrivate = require("../controllers/caloriesprivate/caloriesprivate");
const auth = require("../middleware/auth"); // Importa el middleware de autenticación

// Ruta protegida que requiere autenticación
router.get("/getDailyIntakeAndNonRecFoods", auth, caloriesPrivate.getDailyIntakeAndNonRecFoods);

module.exports = router;

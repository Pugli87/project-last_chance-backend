const express = require('express');
const router = express.Router();
const caloriesPrivate = require("../controllers/caloriesprivate/caloriesprivate");
const auth = require("../middleware/auth"); 

router.get("/daily-rate/lisNotFoodpriv", auth, caloriesPrivate.getDailyIntakeAndNonRecFoods);

module.exports = router;

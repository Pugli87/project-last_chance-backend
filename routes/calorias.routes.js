const express = require("express");
const router = express.Router();
const controllers = require("../controllers/calories/recommendedCaloriesController");

// Route to get daily calorie intake
router.get("/dailyintake/:userId", controllers.getDailyCaloricIntake);

// Route to get the list of non-recommended foods
router.get("/nonrecommendedfoods", controllers.getNonRecommendedFoods);

module.exports = router;

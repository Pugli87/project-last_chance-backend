// recommendedCaloriesController.js

const { getUserData, getNonRecommendedFoodList } = require("../../service/calories/recommendedCaloriesService");

const calculateDailyIntake = (weight, height, age, desiredWeight) => {
  return 10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - desiredWeight);
};

const getDailyCaloricIntake = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await getUserData(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const dailyIntake = calculateDailyIntake(user.weight, user.height, user.age, user.desiredWeight);
    res.json({ dailyIntake });
  } catch (error) {
    console.error("Error in getDailyCaloricIntake:", error);
    next(error);
  }
};

const getNonRecommendedFoods = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await getUserData(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const nonRecommendedFoods = await getNonRecommendedFoodList(user.desiredWeight);
    res.json({ nonRecommendedFoods });
  } catch (error) {
    console.error("Error in getNonRecommendedFoods:", error);
    next(error);
  }
};

module.exports = {
  getDailyCaloricIntake,
  getNonRecommendedFoods,
};


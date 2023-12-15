// recommendedCaloriesController.js

const { getUserData, listNotFood } = require("../../service/calories/recommendedCaloriesService");

const calculateDailyIntake = (peso, altura, edad, pesoDeseado) => {
  return 10 * peso + 6.25 * peso - 5 * edad- 161 - 10 * (peso - pesoDeseado);
};

const getDailyIntake = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await getUserData(userId);

    if (user.userNotFound) {
      return res.status(404).json({ error: "User not found" });
    }

    const dailyIntake = calculateDailyIntake(user.peso, user.altura, user.edad, user.pesoDeseado);
    res.json({ dailyIntake });
  } catch (error) {
    console.error("Error in getDailyIntake:", error);
    next(error);
  }
};

const getNonRecommendedFoods = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await getUserData(userId);

    if (user.userNotFound) {
      return res.status(404).json({ error: "User not found" });
    }
    const nonRecommendedFoods = await listNotFood(user.finalWeight);
    res.json({ nonRecommendedFoods });
  } catch (error) {
    console.error("Error in getNonRecommendedFoods:", error);
    next(error);
  }
};

module.exports = {
  getDailyIntake,
  getNonRecommendedFoods,
};

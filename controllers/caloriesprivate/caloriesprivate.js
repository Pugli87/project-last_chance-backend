// controllers/caloriesprivate.js

const { getUserData, listNotFood } = require("../../service/calorias");
const ListFoodPrivate = require("../../models/ListFoodPrivate");

const calcDailyIntake = ({ peso, altura, edad, pesoDeseado }) =>
  10 * peso + 6.25 * altura - 5 * edad - 161 - 10 * (peso - pesoDeseado);

const getDailyIntakeAndNonRecFoods = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const { userNotFound, peso, altura, edad, pesoDeseado, finalWeight } = await getUserData(userId);

    if (userNotFound) return res.status(404).json({ error: "User not found" });

    const dailyIntake = calcDailyIntake({ peso, altura, edad, pesoDeseado });
    const nonRecFoods = await listNotFood(finalWeight);

    const newData = new ListFoodPrivate({
      userId: req.user.id,
      dailyIntake,
      nonRecFoods,
    });

    await newData.save();

    res.json({ dailyIntake, nonRecFoods });
  } catch (error) {
    console.error("Error in getDailyIntakeAndNonRecFoods:", error);
    next(error);
  }
};

module.exports = {
  getDailyIntakeAndNonRecFoods,
};

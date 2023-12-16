const { ListNotFood } = require("../../models");
const { ListFood } = require("../../models");

const getUserData = async (userId) => {
  try {
    const user = await ListNotFood.findOne({ userId }).exec();
    if (!user) throw new Error("User not found");

    return {
      userNotFound: false,
      peso: user.peso,
      altura: user.altura,
      edad: user.edad,
      pesoDeseado: user.pesoDeseado,
      finalWeight: user.finalWeight,
    };
  } catch (error) {
    console.error("Error in getUserData:", error);
    throw error;
  }
};

const listNotFood = async (finalWeight) => {
  try {
    return await ListFood.find({
      recomendado: false,
      contenidoGrasas: { $gte: 10 },
      contenidoAzucar: { $gte: 5 },
      contenidoSodio: { $gte: 500 },
      // ... otros criterios nutricionales
    }).exec();
  } catch (error) {
    console.error("Error in listNotFood:", error);
    throw error;
  }
};

module.exports = {
  getUserData,
  listNotFood,
};

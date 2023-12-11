// recommendedCaloriesService.js

const Usuario = require("../../models/recommendedCalories");
const ListFood = require("../../models/listFoodSchema");

const obtenerDatosUsuario = async (userId) => {
  try {
    const usuario = await Usuario.findOne({ userId }).exec();

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }

    return {
      peso: usuario.peso,
      altura: usuario.altura,
      edad: usuario.edad,
      pesoDeseado: usuario.pesoDeseado,
    };
  } catch (error) {
    console.error("Error en obtenerDatosUsuario:", error);
    throw error;
  }
};

const obtenerListaAlimentosNoRecomendados = async (pesoFinal) => {
  try {
    const alimentosNoRecomendados = await ListFood.find({
      recomendado: false,
      contenidoGrasas: { $gte: 10 },
      contenidoAzucar: { $gte: 5 },   
      contenidoSodio: { $gte: 500 }, 
      // ... otros criterios nutricionales
    }).exec();

    return alimentosNoRecomendados;
  } catch (error) {
    console.error("Error en obtenerListaAlimentosNoRecomendados:", error);
    throw error;
  }
};

module.exports = {
  obtenerDatosUsuario,
  obtenerListaAlimentosNoRecomendados,
};

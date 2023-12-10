const Usuario = require("../../models/recommendedCalories");
const ListFood = require("../../models/listFoodSchema");

const obtenerDatosUsuario = async (userId) => {
  try {
    const usuario = await Usuario.findOne({ userId }).exec();

    if (!usuario) {
      return { usuarioNoEncontrado: true };
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

const obtenerListaAlimentosNoRecomendados = async () => {
  try {
    const alimentosNoRecomendados = await ListFood.find().exec();
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

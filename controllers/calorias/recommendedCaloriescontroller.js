const Usuario = require("../../models/recommendedCalories"); 
const ListFood = require("../../models/listFood");

const obtenerIngestaDiaria = async (req, res, next) => {
  const userId = req.params.userId;

  try {
   
    const usuario = await obtenerDatosUsuario(userId);

    if (usuario.usuarioNoEncontrado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

   
    const ingestaDiaria = calcularIngestaDiaria(usuario.peso, usuario.altura, usuario.edad, usuario.pesoDeseado);
    res.json({ ingestaDiaria });
  } catch (error) {
    console.error("Error en obtenerIngestaDiaria:", error);
    next(error);
  }
};

const obtenerAlimentosNoRecomendados = async (req, res, next) => {
  try {
  
    const alimentosNoRecomendados = await obtenerListaAlimentosNoRecomendados();
    res.json({ alimentosNoRecomendados });
  } catch (error) {
    console.error("Error en obtenerAlimentosNoRecomendados:", error);
    next(error);
  }
};

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

const calcularIngestaDiaria = (peso, altura, edad, pesoDeseado) => {
  return 10 * peso + 6.25 * altura - 5 * edad - 161 - 10 * (peso - pesoDeseado);
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
  obtenerIngestaDiaria,
  obtenerAlimentosNoRecomendados,
};

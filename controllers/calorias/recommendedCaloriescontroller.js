// recommendedCaloriesController.js

const { obtenerDatosUsuario, obtenerListaAlimentosNoRecomendados } = require("../../service/calorias/recommendedCaloriesService");

const calcularIngestaDiaria = (peso, altura, edad, pesoDeseado) => {
  return 10 * peso + 6.25 * altura - 5 * edad - 161 - 10 * (peso - pesoDeseado);
};

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
    const userId = req.params.userId;
    const usuario = await obtenerDatosUsuario(userId);

    if (usuario.usuarioNoEncontrado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const alimentosNoRecomendados = await obtenerListaAlimentosNoRecomendados(usuario.pesoFinal); 
    res.json({ alimentosNoRecomendados });
  } catch (error) {
    console.error("Error en obtenerAlimentosNoRecomendados:", error);
    next(error);
  }
};

module.exports = {
  obtenerIngestaDiaria,
  obtenerAlimentosNoRecomendados,
};

const logout = async (req, res) => {

  try {
    return console.log("entra");
 } catch (error) {
    // Si hay algún error, imprímelo en la consola y devuelve un objeto con éxito falso y mensaje de error
    console.error('Error al cerrar sesión:', error);
    return { success: false, message: 'Error al cerrar sesión' };
  }
};

module.exports = {
  logout,
};

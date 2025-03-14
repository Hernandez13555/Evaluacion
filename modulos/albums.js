import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getAlbums = async (URL, usuario) => {
  // Exporta una función asíncrona que obtiene los albumes de un usuario específico
  return await solicitud(`${URL}/albums?userId=${usuario.id}`); // Realiza la solicitud a la API usando el ID del usuario y retorna los albumes
};

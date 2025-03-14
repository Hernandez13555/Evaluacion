import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getPost = async (URL, usuario) => {
  // Exporta una función asíncrona que obtiene los posts de un usuario específico
  return await solicitud(`${URL}/posts?userId=${usuario.id}`); // Realiza la solicitud a la API usando el ID del usuario y retorna los posts
};

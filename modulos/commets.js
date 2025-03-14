import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getCommets = async (URL, post) => {
  // Exporta una función asincrona que recibe la URL base y un post como parametro
  return await solicitud(`${URL}/comments?postId=${post.id}`); // Realiza la solicitud para obtener los comentarios del post segun su ID y retorna el resultado
};

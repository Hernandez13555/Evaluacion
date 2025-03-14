import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getCommets = async (URL, albums) => {
  // Exporta una función asíncrona que recibe la URL base y un album como parámetro
  return await solicitud(`${URL}//photos?postId=${post.id}`); // Realiza la solicitud para obtener los comentarios del album según su ID y retorna el resultado
};

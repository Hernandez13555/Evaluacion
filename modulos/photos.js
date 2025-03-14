import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getPhotos = async (URL, albums) => {
  // Exporta una función asíncrona que recibe la URL base y un album como parametro
  return await solicitud(`${URL}//photos?albumsId=${albums.id}`); // Realiza la solicitud para obtener los comentarios del album según su ID y retorna el resultado
};

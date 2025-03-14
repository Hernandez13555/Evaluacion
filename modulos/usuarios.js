import solicitud from "./solicitud.js"; // Importa la función solicitud desde el archivo "solicitud.js"

export const getUsuarios = async (URL, id) => {
  // Exporta una función asíncrona que obtiene usuarios desde una URL, opcionalmente por ID
  let ruta = ""; // Inicializa la variable ruta como una cadena vacía

  if (id) {
    // Si se proporciona un ID...
    ruta = `${URL}/users?id=${id}`; // ...construye la ruta para obtener un usuario específico
  } else {
    // Si no se proporciona ID...
    ruta = `${URL}/users`; // ...construye la ruta para obtener todos los usuarios
  }

  const usuarios = await solicitud(ruta); // Llama a la función solicitud para hacer la petición HTTP a la ruta construida
  return usuarios; // Retorna la respuesta (los usuarios obtenidos)
};

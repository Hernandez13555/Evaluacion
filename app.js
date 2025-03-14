import { getUsuarios, getPost, getCommets } from "./modulos/index.js"; // Importa funciones desde el archivo de módulos

const URL = "https://jsonplaceholder.typicode.com"; // URL base de la API
const usuarioId = 3; // ID del Usuario específico a consultar

const getusuarioId = async (usuarioId) => {
  // Función asíncrona para obtener datos de un usuario específico
  let usuario = await getUsuarios(URL, usuarioId); // Obtiene los datos del usuario con el ID dado
  let post = await getPost(URL, usuario[0]); // Obtiene los posts del usuario (se toma el primer resultado del arreglo)
};

getusuarioId(usuarioId); // Llama a la función con el ID definido

const manejardatos = async () => {
  // Función asíncrona para obtener usuarios, posts y comentarios
  const usuarios = await getUsuarios(URL); // Obtiene todos los usuarios de la API

  return await Promise.all(
    usuarios.map(async (usuario) => {
      // Mapea todos los usuarios para trabajar con ellos de forma asíncrona y retorna los usuarios
      const posts = await getPost(URL, usuario); // Obtiene los posts del usuario actual

      const comentPost = await Promise.all(
        posts.map(async (post) => {
          // Para cada post, obtiene sus comentarios
          const coments = await getCommets(URL, post); // Obtiene los comentarios del post actual
          return { ...post, coments }; // Retorna el post con sus comentarios integrados como propiedad
        })
      );

      return { ...usuario, comentPost }; // Retorna el usuario con todos sus posts y comentarios
    })
  );
};

manejardatos().then((data) => {
  // Llama a la función y maneja el resultado
  console.log(data[0]); // Muestra por consola solo el primer usuario con sus posts y comentarios
});

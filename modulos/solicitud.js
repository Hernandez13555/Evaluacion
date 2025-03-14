const solicitud = async (url) => {
  // Función asíncrona que recibe una URL y realiza una solicitud HTTP
  const peticion = await fetch(url); // Realiza la solicitud HTTP (GET) a la URL usando fetch
  const data = await peticion.json(); // Convierte la respuesta a formato JSON
  return data; // Retorna los datos obtenidos
};

export default solicitud; // Exporta la función por defecto para poder usarla en otros archivos

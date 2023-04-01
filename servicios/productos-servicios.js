

const listaProductos = () => 
  fetch("http://localhost:3000/productos")
  .then((respuesta) => respuesta.json());



const crearProductos = (imagen, nombre, precio) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, nombre, precio }),
  });
};

export const productosServices = {
  listaProductos,
  crearProductos
};



import { productosServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (imagen, nombre, precio, id) => {
    const card = document.createElement("div");
    const contenido = `
      <div class="productos">
        <img class="producto__imagen" alt="lampara" src="${imagen}" />
        <h4 class="producto__titulo">${nombre}</h4>
        <p class="producto__precio">Precio: $${precio}</p>
        <a class="producto__boton" href="../screens/detalle.html?id=${id}">Ver producto</a>
      </div>
    `;
    card.innerHTML = contenido;
    card.dataset.id = id;
  
    return card;
  };
  
  const productos = document.querySelector('[data-product]');
  
  productosServices
  .listaProductos()
  .then((data) => {
    data.forEach(({ imagen, nombre, precio, id }) => {
      const nuevaCard = nuevoProducto (imagen, nombre, precio, id);
      productos.appendChild(nuevaCard);
    });
  }).catch((error) => alert("Ocurrió un error"));








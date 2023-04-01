import { productosServices } from "../servicios/productos-servicios.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const img = document.querySelector("[data-imagen]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  productosServices.crearProductos(img, nombre, precio)
    .then(() => {
      window.location.href = "../screens/concluido.html";
    })
    .catch((err) => console.log(err));
});


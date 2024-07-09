document.addEventListener("DOMContentLoaded", async () => {
  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get("id");

  console.log(productoId);

  if (productoId) {
    try {
      // URL de tu backend en AlwaysData
      const baseURL = "http://silviagra.alwaysdata.net:3000";

      // Hacer una solicitud para obtener los datos del producto
      const respuesta = await axios.get(`${baseURL}/productos/${productoId}`);
      const producto = respuesta.data;

      // Cargar los datos del producto en el formulario
      document.getElementById("productoId").value = producto.id;
      document.getElementById("nombre").value = producto.nombre;
      document.getElementById("imagen").value = producto.imagen;
      document.getElementById("alt").value = producto.alt;
      document.getElementById("precio").value = producto.precio;
      document.getElementById("descripcion").value = producto.descripcion;
    } catch (error) {
      console.error("Error al cargar el producto", error);
    }
  }

  // Manejar el envío del formulario para actualizar el producto
  document.getElementById("formEditarProducto").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const updatedProduct = {
        nombre: document.getElementById("nombre").value,
        imagen: document.getElementById("imagen").value,
        alt: document.getElementById("alt").value,
        precio: document.getElementById("precio").value,
        descripcion: document.getElementById("descripcion").value,
      };

      // URL de tu backend en AlwaysData
      const baseURL = "http://silviagra.alwaysdata.net:3000";

      await axios.put(`${baseURL}/productos/${productoId}`, updatedProduct);
      alert("Producto actualizado exitosamente");
      window.location.href = "frontProductos.html";
    } catch (error) {
      console.error("Error al actualizar el producto", error);
    }
  });

  // Agregar evento de clic al botón "Cancelar"
  document.getElementById("btnCancelar").addEventListener("click", () => {
    window.location.href = "frontProductos.html";
  });
});

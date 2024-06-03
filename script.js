// Definir una lista de productos con su información
const productos = [
    { id: 1, nombre: "Cafe Irish", precio: 4.60, cantidad: 0 },
    { id: 2, nombre: "Cafe Inglés", precio: 5.70, cantidad: 0 },
    { id: 3, nombre: "Cafe Australiano", precio: 3.20, cantidad: 0 },
    { id: 4, nombre: "Cafe Helado", precio: 5.60, cantidad: 0 }
];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(item => item.id === id);
    if (producto) {
        producto.cantidad++;
        actualizarCarrito();
    }
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoElemento = document.getElementById("carrito");
    carritoElemento.innerHTML = "";

    let total = 0;
    productos.forEach(producto => {
        if (producto.cantidad > 0) {
            total += producto.precio * producto.cantidad;
            carritoElemento.innerHTML += `<li>${producto.nombre}: ${producto.cantidad}</li>`;
        }
    });

    carritoElemento.innerHTML += `<li>Total: $${total.toFixed(2)}</li>`;
}

// Event listeners para los botones de agregar al carrito
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const id = parseInt(button.dataset.id);
        agregarAlCarrito(id);
    });
});

// Llamar a actualizarCarrito para inicializar la visualización del carrito
actualizarCarrito();

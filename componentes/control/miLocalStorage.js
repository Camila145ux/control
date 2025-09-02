
const CARRITO = 'carrito';

function guardarProducto(producto) {
localStorage.setItem(CARRITO, JSON.stringify(producto));
}

function obtenerProducto() {
return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

export { CARRITO, guardarProducto, obtenerProducto };
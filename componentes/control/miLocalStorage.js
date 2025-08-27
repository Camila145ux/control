const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'lista_compras';

function guardarProducto(producto) {
localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(producto));
}

function obtenerProducto() {
return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS)) || [];
}

export { LOCAL_STORAGE_KEY_ASSIGNMENTS, guardarProducto, obtenerProducto };
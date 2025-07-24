function header() {
    let fondo = document.createElement("div");
    fondo.className = "rectangulo";

    let nombre = document.createElement("nombre");
    nombre.innerText = "Camila Barrondo"
    nombre.className ="nombre";

    let circulo = document.createElement("div");
    circulo.innerText = "🌼"
    circulo.className = "circulo";

    fondo.appendChild(nombre);
    fondo.appendChild(circulo);

    return fondo;
}

export { header };

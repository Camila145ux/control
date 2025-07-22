function header() {
    let fondo = document.createElement("div");
    fondo.className = "rectangulo";

    let circulo = document.createElement("div");
    circulo.className = "circulo";

    fondo.appendChild(circulo);

    return fondo;
}

export { header };

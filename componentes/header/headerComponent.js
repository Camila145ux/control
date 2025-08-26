

function header() {
    let header = document.createElement("div");
    header.className = "header";


    let fondo = document.createElement("div");
    fondo.className = "rectangulo";

    let nombre = document.createElement("nombre");
    nombre.innerText = "Tienda CB"
    nombre.className ="nombre";

    let circulo = document.createElement("div");
    circulo.innerText = "🌼"
    circulo.className = "circulo";

    fondo.appendChild(nombre);
    fondo.appendChild(circulo);
    header.appendChild(fondo);

   

    return header;
}

export { header };

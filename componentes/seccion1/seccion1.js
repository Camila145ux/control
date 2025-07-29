import { item } from "../item/itemModulo.js";

export function seccion1(){
    let seccion = document.createElement("seccion");
    seccion.className = "seccion-1"

    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());


    return seccion;
}
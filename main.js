import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1.js";
import {navComponent} from "./componentes/nav/navComponent.js"

function seccion() {
    let seccion = document.createElement("section");

     //header
    seccion.appendChild(header());

    //seccion
    seccion.appendChild(seccion1());
    

    //nav
    seccion.appendChild(navComponent());

    return seccion;
}

document.body.appendChild(seccion());

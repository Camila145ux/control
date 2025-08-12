import { item } from "../item/itemModulo.js";

export function seccion1(){
    let seccion = document.createElement("seccion");
    seccion.className = "seccion-1"


    
let flores = [
    ["HOLA 1", "https://img.freepik.com/fotos-premium/2408-35-um-close-detalhado-de-uma-flor-de-peonia-azul-colocada-contra-um-fundo-branco-pristino-as-petalas-em-camadas-lisas-irradiam-do-centro-exibindo-ricos-tons-de-azul-em-forte-contraste-com-o_1292484-26286.jpg"],
    ["HOLA 2", "https://png.pngtree.com/png-vector/20240313/ourmid/pngtree-white-peony-flower-watercolor-style-for-decorative-element-png-image_11944398.png"],
    ["HOLA 3", "https://www.pngplay.com/wp-content/uploads/10/Peony-PNG-Images-HD.png"],
    ["HOLA 4", "https://static.vecteezy.com/system/resources/previews/024/190/498/non_2x/beautiful-red-common-peony-free-png.png"]
];

// Para añadirlas a la sección
flores.forEach(flor => {
    seccion.appendChild(item(flor[0], flor[1]));
});

    return seccion;
}
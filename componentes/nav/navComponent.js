 export function navComponent(){
    let navComponent = document.createElement("div");
    navComponent.className = "navComponent";

    let fondo2 = document.createElement("div");
    fondo2.className = "fondo2";

    let c1 = document.createElement("div");
    c1.innerText = "🏠";
    c1.className = "c1";
 

    let c2 = document.createElement("div");
    c2.innerText = "📦"
    c2.className = "c2";

    let c3 = document.createElement("div");
    c3.innerText = "❓"
    c3.className = "c3";

    let c4 = document.createElement("div");
    c4.innerText = "🛒"
    c4.className = "c4";

    fondo2.appendChild(c1);
    fondo2.appendChild(c2);
    fondo2.appendChild(c3);
    fondo2.appendChild(c4);

    navComponent.appendChild(fondo2);

    return navComponent;

}
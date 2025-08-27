
export function item(titulo, urlImg, description, price){
    let item = document.createElement("div");
    item.className = "item";

    let h3 = document.createElement('h3');
    h3.className = "title";
    h3.textContent = titulo;
    item.appendChild(h3);

    let img = document.createElement("img");
    img.src = urlImg;
    item.appendChild(img);


    let p = document.createElement('p');
    p.textContent = description;
    p.className = "descrip"
    item.appendChild(p);

    let span = document.createElement('span');
    span.textContent = "$ " + price;
    span.className = "precio";
    item.appendChild(span);

    

    item.addEventListener("click",()=>{
    

    });
    //funcion anonima: ()=>{}
    return item;
}

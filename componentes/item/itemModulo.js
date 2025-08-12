export function item(titulo, urlImg){
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = titulo;

    let img = document.createElement("img");
    img.src = urlImg;
    item.appendChild(img);

    item.addEventListener("click",()=>{
        item.classList.add("verde");
        let header = document.querySelector(".header");
        header.classList.add('ocultar');
    });
    //funcion anonima: ()=>{}

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.innerText = "pochacco";

    let imagen = document.createElement("img");
    imagen.className = "img";
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCkG1nPCC3--9YgvxGqc6c34qv_UpHGnPlQ&s";

    let descripcion = document.createElement("p");
    descripcion.className = "descrip";
    descripcion.innerText = "Pochacco es pequeño, curioso y torpe y a veces mete la nariz donde no lo llaman. Vive en el Callejón del Ruiseñor y le encanta el baloncesto.";

    item.appendChild(titulo);
    item.appendChild(imagen);
    item.appendChild(descripcion);
    
    return item;
}
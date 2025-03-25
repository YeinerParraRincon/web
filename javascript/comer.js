document.getElementById("formulario-menu").addEventListener("submit", function(event){
event.preventDefault();

let producto = document.getElementById("productos").value;
let precio = document.getElementById("precio").value;
let imagen = document.getElementById("imagen").files[0];
let empresa = document.getElementById("empresa").value;
let ubicacion = document.getElementById("ubicacion").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;

if (!producto || !precio || !imagen || ! empresa || !ubicacion || !telefono || !correo){
    alert("Todo los campos son obligatorios");
    return;
}

    let leer = new FileReader();
    leer.onload = function(e){
         let nuevaOferta = {
            producto,
            precio,
            imagen: e.target.result,
            empresa,
            ubicacion,
            telefono,
            correo ,
         };

         let comer = JSON.parse(localStorage.getItem("comercio")) || [];
         comer.push(nuevaOferta);

         localStorage.setItem("comercio", JSON.stringify(comer));

         mostrarOfertas();

         document.getElementById("formulario-menu").reset();
    };
    leer.readAsDataURL(imagen);
    
});
function mostrarOfertas(){
let lista = document.getElementById("lista-menu");
lista.innerHTML = "";

let comer = JSON.parse(localStorage.getItem("comercio")) || [];
if (comer.length === 0){
    lista.innerHTML = "<p>No hay ofertas disponibles perdon</p>";
    return;
}
comer.forEach((comercio, index)=>{
let div = document.createElement("div");
div.classList.add("comer");
div.innerHTML = `
          <img src="${comercio.imagen}" alt="${comercio.imagen}" width="100">
            <h3>${comercio.producto}</h3>
            <p>Precio: $${comercio.precio}</p>
            <p>Empresa: ${comercio.empresa}</p>
            <p>ubicacion: ${comercio.ubicacion}</p>
            <p>telefono: ${comercio.telefono}</p>
            <p>correo: ${comercio.correo}</p>`;
            lista.appendChild(div);
});
}
document.addEventListener("DOMContentLoaded", mostrarOfertas);
document.addEventListener("DOMContentLoaded", function() {

    // Configuración de ScrollReveal
    ScrollReveal().reveal('.header-contenedor h1', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });

    ScrollReveal().reveal('.header-contenedor p', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });

    ScrollReveal().reveal('.header-contenedor .btn-hero', {
        delay: 700,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });
});


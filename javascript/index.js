document.addEventListener("DOMContentLoaded",function(){//este no es formulario


//haca funcion para cargar productos destacados
function mostrarProductosDestacados() {
let productos = JSON.parse(localStorage.getItem("producto")) || [];
//Ordenar productos de mayor a menor para mis productos destacados
productos.sort((c,d)=> d.compras- c.compras);
//Toma los productos mas comprados los 3 primeros
let productosDestacados = productos.slice(0,3);
//Mostrar los productos mas destacados
let container = document.getElementById("productos-mini");
container.innerHTML="";

productosDestacados.forEach(producto =>{
    let div = document.createElement("div");//cre una clase div
    div.classList.add("producto");//la estoy agregando a producto
    div.innerHTML = `
    <img src= "${producto.imagen}" alt="${producto.nombre}" class="productos-alimentos" width="200">
    <h3>"${producto.nombre}"</h3>
    <p>precio :$${producto.precio}</p>
    <p>peso:${producto.peso} kg</p>
    <p>compras:${producto.compras}</p>
    `;
    container.appendChild(div)
});
}
//Cargar productos cuando mi pagina se recargue
mostrarProductosDestacados();
//Esto es la portada de mi pagina
ScrollReveal().reveal('.hero-contenedor h1', {
    delay: 300, // Delay para que el título aparezca primero
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.hero-contenedor p', {
    delay: 500, // Delay un poco mayor para que el texto aparezca después del título
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
    reset: true
});

ScrollReveal().reveal('.hero-contenedor .btn-hero', {
    delay: 700, // Delay mayor para que el botón aparezca último
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
    opacity: 0,
    reset: true
});
/*Esto es el contenido con la libreria scroll*/
        ScrollReveal().reveal('.informacion-contenedor', {
            delay: 200, // Menor delay para que aparezca más rápido
    distance: '100px', // Mayor distancia para un efecto más dramático
    origin: 'left', // Aparece desde la izquierda
    duration: 1200, // Duración un poco más larga para un efecto suave
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Curva de easing personalizada
    opacity: 0, // Comienza invisible
    reset: true              // Repetir la animación al volver a hacer scroll
        });
        ScrollReveal().reveal('.container-productos', {
            delay: 300, // Delay un poco mayor para que aparezcan de forma escalonada
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out', 
    opacity: 0,
    scale: 0.9, // Escala inicial para un efecto de zoom
    reset: true              // Repetir la animación al volver a hacer scroll
        });
        ScrollReveal().reveal('.llamativo', {
            delay: 200,
    distance: '150px', // Mayor distancia para un efecto más llamativo
    origin: 'top', // Aparece desde arriba
    duration: 1000,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Easing con rebote
    opacity: 0,
    reset: true             // Repetir la animación al volver a hacer scroll
        });
        ScrollReveal().reveal('footer *', {
            delay: 200,
    distance: '100px',
    origin: 'right', // Aparece desde la derecha
    duration: 1000,
    easing: 'ease-in-out', // Easing suave
    opacity: 0,
    reset: true            // Repetir la animación al volver a hacer scroll
        });
});

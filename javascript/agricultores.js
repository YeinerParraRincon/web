// Añade un evento al formulario para manejar el envío
document.getElementById("formularioProducto").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtiene los valores de los campos del formulario
    let nombre = document.getElementById("tipoproducto").value;
    let precio = document.getElementById("precio").value;
    let peso = document.getElementById("pesoproducto").value;
    let imagen = document.getElementById("imagenproducto").files[0];
    
    // Verifica que todos los campos estén llenos
    if(!nombre || !precio || !peso || !imagen){
        alert("Todos los campos son obligatorios");
        return;
    }

    // Lee el archivo de imagen
    let reader = new FileReader();
    reader.onload = function(e){
        // Crea un nuevo objeto de producto con los datos del formulario
        let Nuevoproducto = {
             nombre,
             precio,
             peso,
             imagen: e.target.result,
        };
    
        // Obtiene los productos almacenados en localStorage o crea un array vacío si no hay ninguno
        let productos = JSON.parse(localStorage.getItem("producto")) || [];
        // Añade el nuevo producto al array de productos
        productos.push(Nuevoproducto);
        // Guarda el array de productos actualizado en localStorage
        localStorage.setItem("producto", JSON.stringify(productos));
        
        // Muestra los productos actualizados en la página
        mostrarProductos();
        // Resetea el formulario
        document.getElementById("formularioProducto").reset();
    };
    // Lee el archivo de imagen como una URL de datos
    reader.readAsDataURL(imagen);
});

// Función para manejar la compra de productos
function comprarProductos(index){
    if (confirm("¿Estás seguro de hacer esta compra?")){
        let productos = JSON.parse(localStorage.getItem('producto')) || [];
        productos[index].compras = (productos[index].compras || 0) + 1; // Incrementa el contador de compras
        localStorage.setItem("producto", JSON.stringify(productos)); // Guarda los productos actualizados en localStorage
        
        mostrarProductos(); // Muestra los productos actualizados en la página
    }
}

// Función para mostrar los productos en la página
function mostrarProductos(){
    let lista = document.getElementById("listaProductos");
    lista.innerHTML = "";

    let productos = JSON.parse(localStorage.getItem("producto")) || [];

    if (productos.length === 0) {
        lista.innerHTML = "<p>No hay productos disponibles</p>";
        return;
    }

    productos.forEach((producto, index) => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Peso: ${producto.peso} kg</p>
            <button onclick="eliminarProducto(${index})" class="button-js">Eliminar</button><br>
            <button onclick="comprarProductos(${index})" class="button-js">Comprar productos</button>
        `;
        lista.appendChild(div);
    });
}

// Función para limpiar el localStorage
function limpiarLocalStorage(){
    localStorage.clear();
    alert("¿Seguro que deseas eliminar el LocalStorage?");
    location.reload(); // Recarga la página después de los cambios
}

// Función para eliminar un producto
function eliminarProducto(index) {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
        let productos = JSON.parse(localStorage.getItem("producto")) || [];
        productos.splice(index, 1); // Elimina el producto del array
        localStorage.setItem("producto", JSON.stringify(productos)); // Guarda los productos actualizados en localStorage
        mostrarProductos(); // Muestra los productos actualizados en la página
    }
}

// Muestra los productos cuando el contenido del DOM se ha cargado
document.addEventListener("DOMContentLoaded", mostrarProductos);
document.addEventListener("DOMContentLoaded", function() {

    // Configuración de ScrollReveal
    ScrollReveal().reveal('.navegacion h1', {
        delay: 300,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });

    ScrollReveal().reveal('.navegacion p', {
        delay: 500,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });

    ScrollReveal().reveal('.navegacion .btn-hero', {
        delay: 700,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out',
        opacity: 0,
        reset: true
    });
});
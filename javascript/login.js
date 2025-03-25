document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
//Creo unas variables  para guardar datos formularios
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
//Verificar todos los campos si estan llenos
    if (!email || !password){
        alert("Todo los campos son obligatorios");
        return;
    }
//Crear un objeto para guardar los datos del usuario
    let user = {
        email: email,
        password: password
    };
    //Guardar el usuario en el local storage
    localStorage.setItem("user", JSON.stringify(user));
    
    if (checkIfOwner(email)){
        window.location.href = ("../html/administrador.html");
    }
    else {
        alert("Fue exitoso el inicio de sesion");
        window.location.href = ("../index.html");
    }
});
document.addEventListener("DOMContentLoaded", function(){

    const exclusiveButton = document.getElementById("exclusive");

    //simula la verificacion del dueño
    const user = JSON.parse(localStorage.getItem("user"));
    const isOwner = user && checkIfOwner(user.email);
    
    if(isOwner){
        exclusiveButton.disabled=false;
        exclusiveButton.addEventListener("click", function(){
            window.location.href = ("../html/administrador.html");
            alert("Eres el dueño de la pagina");
        });
    }else{
        exclusiveButton.disabled=true;
    }
});

function checkIfOwner(email){
    const ownerEmail = 'h1484801@gmail.com';
    return email === ownerEmail;
}


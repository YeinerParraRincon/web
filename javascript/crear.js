document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    alert("¿Estas seguro de crear una cuenta en AgriFormen?");
    window.location.href = "login.php";
});
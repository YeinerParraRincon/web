document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Se ha actualizado tu datos");
    window.location.href = "login.php";
    
});
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Agriprovedores - Conectamos agricultores y proveedores para ofrecer productos agrícolas frescos y de calidad.">
    <meta name="keywords" content="agricultura, productos agrícolas, frescos, orgánicos, sostenible">
    <meta name="author" content="Agriprovedores">
    <title>LOGIN</title>
    <link rel="stylesheet" href="../css/login.css">
    <link rel="icon" href="../img/agrocicultor.webp"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
<!--Este es el login-->
<section class="login-section">
    <div class="login-container">
        <div class="login-card">
            <div class="login-left" id="login-left">
                <div class="login-header">
                    <img src="../img/logo-oficial.webp" 
                         alt="logo" class="logo">
                    <h4 class="login-title">🚜AGRI<span>FORMEN</span></h4>
                </div>

                <form action="../index.html" method="post" class="login-form" id="login-form">
                    <p class="form-title">Iniciar sesión</p>

                    <div class="form-group">
                        <input type="email" id="email" class="form-input" placeholder="Correo" required>
                    </div>

                    <div class="form-group">
                        <input type="password" id="password" class="form-input" placeholder="Contraseña" required >
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="login-button">
                            <i class="fas fa-hand-point-right"></i>
                            Iniciar sesión</button>
                        <a href="../php/olvidasteTucontraseña.php" class="forgot-password">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div class="register-section">
                        <p class="register-text">¿No tienes una cuenta?</p>
                        <button type="button" class="register-button">
                            <i class="fas fa-hand-point-right"></i>
                            <a href="../php/crearContraseña.php" class="Crear">Crear una nueva</a>
                        </button>
                    </div>
                </form>
            </div>
<!--Esto es la parte iquierda de la pagina-->
            <div class="login-right">
                <div class="right-content">
                    <h4 class="right-titulo">🚜AGRI<span>FORMEN</span></h4>
                    <p class="right-descripcion">
                        En AgriFormen, nos dedicamos a facilitar la conexión entre agricultores y Comerciantes.
                        Aquí encontrarás una gran variedad de productos agrícolas, cada uno con su propio
                        valor asignado por los productores. ¡Explora y descubre lo mejor de la agricultura local!
                    </p>
                    <iframe width="400" height="200px" src="https://www.youtube.com/embed/QuoqfP9iV38?si=ERcvcQn-pg2t-AJd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</section>
<script src="../javascript/login.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
</body>
</html>
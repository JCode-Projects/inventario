<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Inventario Productos || PSW</title>
    <link rel="stylesheet" href="build/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Allan&amp;display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap">
    <link rel="stylesheet" href="build/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="build/css/Navigation-Clean.css">
    <link rel="stylesheet" href="build/css/simple-footer.css">
    <link rel="stylesheet" href="build/css/styles.css">
</head>
<body>
    <nav class="navbar navbar-light navbar-expand-md bounce animated navigation-clean" style="z-index: 5;">
        <div class="container">
            <a class="navbar-brand" href="/" style="font-family: Allan, serif;color: var(--bs-info);font-size: 28px;">PC Electronics</a>
            <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1">
                <span class="visually-hidden">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Administrador</a>
                        <div class="dropdown-menu">
                            <a id="create-db" class="dropdown-item" href="./api/config/crear_db.php">Crear Base de Datos</a>
                            <a id="create-table" class="dropdown-item" href="./api/config/crear_tabla.php">Crear Tabla</a>
                            <a id="create-pdf" class="dropdown-item" href="./api/config/crear_pdf.php">Generar Reporte PDF</a>
                            <a id="create-backup" class="dropdown-item" href="./api/config/backup.php">Generar Backup</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Inventario</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="./registrar.php">Registrar</a>
                            <a class="dropdown-item" href="./actualizar.php">Actualizar</a>
                            <a class="dropdown-item" href="./eliminar.php">Eliminar</a>
                            <a class="dropdown-item" href="./consultar.php">Consultar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">Utilidades</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="./calculadora.php">Utilidades</a>
                            <a class="dropdown-item" href="./conversor.php">Conversión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
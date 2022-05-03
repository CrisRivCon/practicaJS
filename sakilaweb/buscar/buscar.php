<?php

session_start();
require '../miDB.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" type="text/css" media="screen" />
    <title>Buscar</title>
</head>
<body>
    <div class="container bg-light">
        <nav class="navbar navbar-expand-lg navbar-dark bg-info pt-3 pb-3">
            <a class="navbar-brand text-light" href="buscar.php">Buscar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon text-muted"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="../index.php">Actores</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="../peliculas/index.php">Peliculas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="buscar.php">Buscar</a>
                </li>
              </ul>
          </nav>
        <div class="row mt-3 p-md-2" id="tabla">
            
        </div>
        <div class="row mt-3 justify-content-md-around" id="form">
            <form class="m-3" id="form_buscar" method="post" action="" enctype="multipart/form-data">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault01">Buscar por nombre de actor:</label>
                    <input type="text" class="form-control bg-info text-white" name="first_name" id="nombre" minlength="4" maxlength="10" >
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault02">Buscar por titulo de pelicula:</label>
                    <input type="text" class="form-control bg-info text-white" name="title" id="titulo" minlength="4" maxlength="10">
                  </div>
                </div>
                <div class="text-center">
                    <input class="btn btn-info my-3" type="submit" name="submit" id="buscar" value="Buscar">
                </div>
            </form>
        </div>
        <div class="row mt-3 table-responsive" id="pie">

        </div> 

    </div>
  
  </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
    <script src="verPelis.js"></script>
</body>
</html>
<?php

session_start();
require 'miDB.php';
    $data = $myDB->query("SELECT film_id, title, description FROM film ORDER BY film_id DESC LIMIT 5")->fetchAll();
    $dataActor = $myDB->query("SELECT actor_id, first_name, last_name FROM actor ORDER BY actor_id LIMIT 30")->fetchAll();
    $dataFilm = $myDB->query("SELECT film_id, title FROM film ORDER BY film_id LIMIT 30")->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Peliculas</title>
</head>
<body>
    <div class="container bg-light">
        <nav class="navbar navbar-expand-lg navbar-dark bg-info pt-3 pb-3">
            <a class="navbar-brand text-light" href="./index.php">Peliculas</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon text-muted"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="../index.php">Actores</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="./index.php">Peliculas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" data-toggle="modal" data-target="#asignar_pelicula">Asignar Pelicula</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="../buscar/buscar.php">Buscar</a>
                </li>
              </ul>
          </nav>
        <div class="row mt-3 p-md-2" id="tabla">
            <table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-3 m-md-2 text-white">
                <thead class="bg-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col" class="text-center">Opciones</th>
                  </tr>
                </thead>
                <tbody id="cuerpo_tabla">
                  <?php
                    foreach ($data as $row) {
                      echo "<tr id=\"f".$row['film_id']."\">
                                <th scope=\"row\">".$row['film_id']."</th>
                                <td class=\"".$row['film_id']."\">".$row['title']."</td>
                                <td class=\"".$row['film_id']."\">".$row['description']."</td>
                                <td class=\"text-center\">
                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                                      <div class=\"btn-group\" role=\"group\">
                                        <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                          Opciones
                                        </button>
                                        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                          <a class=\"dropdown-item editar-actor\" href=\"#\" id=\"".$row['film_id']."\" data-toggle=\"modal\" data-target=\"#editar_pelicula\">Editar</a>
                                          <a class=\"dropdown-item eliminar-actor\" id=\"".$row['film_id']."\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_pelicula\">Eliminar</a>
                                          <a class=\"dropdown-item ver-peliculas\" href=\"#\" id=\"".$row['film_id']."\" data-toggle=\"modal\" data-target=\"#ver_actores\">Ver Actores</a>
                                        </div>
                                      </div>
                                    </div>
                                </td>
                              </tr>";
                      }
                  ?>
                </tbody>
              </table>
        </div>
        <div class="row mt-3 justify-content-md-around">
            <form class="m-3" id="form_insertar_actor" method="post" action="" enctype="multipart/form-data">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault01">Title</label>
                    <input type="text" class="form-control bg-info text-white" name="title" id="validationDefault01" minlength="4" maxlength="10" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Description</label>
                    <input type="text" class="form-control bg-info text-white" name="description" id="validationDefault02" minlength="4" maxlength="10" required>
                  </div>
                </div>
                <div class="text-center">
                    <input class="btn btn-info my-3" type="submit" name="submit" id="insertar_actor" value="A??adir Pelicula">
                </div>
            </form>
        </div>
        <div class="row mt-3" id="pie">

        </div> 

    </div>
  
  <!-- Modal asignar peliculas -->
  <div class="modal fade" id="asignar_pelicula" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Asignar Pelicula</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row mt-3 justify-content-md-around" id="formulario">
                <form class="m-3" id="form_asignar_pelicula">
                    <select class="custom-select bg-info text-white" size="3" id="actor">
                        <option selected>Selecciona un actor</option>
                        <?php
                          foreach ($dataActor as $row) {
                              echo "<option value=\"".$row['actor_id']."\">".$row['last_name'].", ".$row['first_name']."</option>";
                          }
                        ?>
                    </select>
                    <select class="custom-select bg-info text-white mt-5" size="3" id="film">
                        <option selected>Selecciona una pelicula</option>
                        <?php
                          foreach ($dataFilm as $row) {
                              echo "<option value=\"".$row['film_id']."\">".$row['title']."</option>";
                          }
                        ?>
                    </select>
                </form>
            </div>
        </div>
        <div class="modal-footer">
          <div id="pie_modal_asignar"></div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" name="submit" id="btn_asignar" class="btn btn-info">Asignar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal editar pelicula -->
  <div class="modal fade" id="editar_pelicula" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Actualizar Pelicula</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row mt-3 justify-content-md-around" id="formulario">
              <form class="m-3" id="form_editar_actor">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault01">Title</label>
                    <input type="text" class="form-control bg-info text-white" name="title" id="validationDefault01" minlength="4" maxlength="100" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Description</label>
                    <input type="text" class="form-control bg-info text-white" name="description" id="validationDefault02" minlength="4" maxlength="200" required>
                  </div>
                </div>
              </form>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" id="actualizar-actor" class="btn btn-info" data-dismiss="modal">Actualizar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal eliminar actor -->
  <div class="modal fade" id="eliminar_pelicula" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar Pelicula</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-light text-muted">
                <p>??Seguro que quieres eliminarlo?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" id="eliminar-actor" class="btn btn-danger" data-dismiss="modal">ELIMINAR</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal ver actores -->
  <div class="modal fade" id="ver_actores" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Actores que aparecen</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body  table-responsive">
            <table class="table table-hover table-striped table-info p-md-3 m-md-2 text-white">
                <thead class="bg-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal desasignar pelicula -->
  <div class="modal fade" id="desasignar_pelicula" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Desasignar Actor</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-light text-muted">
                <p>??Seguro que quieres eliminarlo?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" id="desasignar-pelicula" class="btn btn-danger" data-dismiss="modal">ELIMINAR</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
    <script src="js/editar.js"></script>
    <script src="js/eliminar.js"></script>
    <script src="js/ver.js"></script>
    <script src="js/asignarPelicula.js"></script>
    <script src="js/insertar.js"></script>
  </body>
</html>
<?php
session_start();
require 'miDB.php';

    $data = $myDB->query("SELECT actor_id, first_name, last_name FROM actor ORDER BY actor_id DESC LIMIT 5")->fetchAll();
    /*foreach ($data as $row) {
        echo $row['first_name']."<br />\n";
    }*/
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Actores</title>
</head>
<body>
    <div class="container bg-light">
        <nav class="navbar navbar-expand-lg navbar-dark bg-info pt-3 pb-3">
            <a class="navbar-brand text-light" href="index.html">Actores</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon text-muted"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="pelis.html">Peliculas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" data-toggle="modal" data-target="#asignar_pelicula">Asignar Pelicula</a>
                </li>
              </ul>
              <!--<form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search">
                <button class="btn btn-outline-info text-white my-2 my-sm-0" type="submit">Search</button>
              </form>-->
          </nav>
        <div class="row mt-3 p-md-2" id="tabla">
            <table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-3 m-md-2 text-white">
                <thead class="bg-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col" class="text-center">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <?php
                    foreach ($data as $row) {
                      echo "<tr>
                                <th scope=\"row\">".$row['actor_id']."</th>
                                <td class=\"".$row['actor_id']."\">".$row['first_name']."</td>
                                <td class=\"".$row['actor_id']."\">".$row['last_name']."</td>
                                <td class=\"text-center\">
                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                                      <div class=\"btn-group\" role=\"group\">
                                        <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                          Opciones
                                        </button>
                                        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                          <a class=\"dropdown-item editar-actor\" href=\"#\" id=\"".$row['actor_id']."\" data-toggle=\"modal\" data-target=\"#editar_actor\">Editar</a>
                                          <a class=\"dropdown-item eliminar-actor\" id=\"".$row['actor_id']."\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_actor\">Eliminar</a>
                                          <a class=\"dropdown-item ver-peliculas\" href=\"#\" id=\"".$row['actor_id']."\" data-toggle=\"modal\" data-target=\"#ver_peliculas\">Ver Peliculas</a>
                                        </div>
                                      </div>
                                    </div>
                                </td>
                              </tr>";
                      }
                  ?>
                  <!--<tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>
                        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <div class="btn-group" role="group">
                              <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Opciones
                              </button>
                              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#">Editar</a>
                                <a class="dropdown-item" href="#">Eliminar</a>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#ver_peliculas">Ver Peliculas</a>
                              </div>
                            </div>
                          </div>
                    </td>
                  </tr>-->
                </tbody>
              </table>
        </div>
        <div class="row mt-3 justify-content-md-around" id="formulario">
            <form class="m-3" method="post" action="insertarActor.php">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault01">First name</label>
                    <input type="text" class="form-control bg-info text-white" name="first_name" id="validationDefault01" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" class="form-control bg-info text-white" name="last_name" id="validationDefault02" required>
                  </div>
                </div>
                <!--<div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault03">City</label>
                    <input type="text" class="form-control bg-info text-white" id="validationDefault03" required>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label class="text-muted" for="validationDefault04">State</label>
                    <select class="custom-select bg-info text-white" id="validationDefault04" required>
                      <option selected disabled value="">Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label class="text-muted" for="validationDefault05">Zip</label>
                    <input type="text" class="form-control bg-info text-white" id="validationDefault05" required>
                  </div>-->
                </div>
                <div class="text-center">
                    <input class="btn btn-info my-3" type="submit" name="submit" value="Añadir Actor">
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
                <form class="m-3">
                    <select class="custom-select bg-info text-white" size="3">
                        <option selected>Selecciona un actor</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select class="custom-select bg-info text-white mt-5" size="3">
                        <option selected>Selecciona una pelicula</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </form>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-info">Asignar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal editar actor -->
  <div class="modal fade" id="editar_actor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Actualizar Actor</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="row mt-3 justify-content-md-around" id="formulario">
              <form class="m-3" id="form_editar_actor">
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label class="text-muted" for="validationDefault01">First name</label>
                    <input type="text" class="form-control bg-info text-white" name="first_name" id="validationDefault01" required>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" class="form-control bg-info text-white" name="last_name" id="validationDefault02" required>
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
  <div class="modal fade" id="eliminar_actor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar Actor</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-light text-muted">
                <p>¿Seguro que quieres eliminarlo?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="submit" id="eliminar-actor" class="btn btn-danger" data-dismiss="modal">ELIMINAR</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal ver peliculas -->
  <div class="modal fade" id="ver_peliculas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Peliculas en las que aparece</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white">
                <thead class="bg-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Release Year</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                <?php
                    foreach ($_SESSION['pelis'] as $pelicula) {
                      var_dump($pelicula);
                      echo "<tr>
                                <th scope=\"row\">".$pelicula['film_id']."</th>
                                <td class=\"".$pelicula['film_id']."\">".$pelicula['title']."</td>
                                <td class=\"".$pelicula['film_id']."\">".$pelicula['release_year']."</td>
                                <td class=\"text-center\">
                                    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                                      <div class=\"btn-group\" role=\"group\">
                                        <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                          Opciones
                                        </button>
                                        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                          <a class=\"dropdown-item editar-pelicula\" href=\"#\" id=\"".$pelicula['film_id']."\" data-toggle=\"modal\" data-target=\"#editar_pelicula\">Editar</a>
                                          <a class=\"dropdown-item eliminar-pelicula\" id=\"".$pelicula['film_id']."\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_pelicula\">Eliminar</a>
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
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
  
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
    <script src="js/editarActor.js"></script>
    <script src="js/eliminarActor.js"></script>
    <script src="js/verPeliculas.js"></script>
      <!--  var btnVerPeliculas = document.getElementsByClassName('verPeliculas');
      for (const key in btnVerPeliculas) {
        key.addEventListener('click', event =>{
        let idValue = key.dataset.id;
        fetch(urlUser)
            .then(response => response.json())
            .then(data => {
                let datos = `<p><b>Nombre:</b> ${data[0].name} </p>
                <p><b>Nombre de usuario:</b> ${data[0].username} </p>
                <p><b>Email:</b> ${data[0].email} </p>`;
                document.querySelector('.card-body').innerHTML = datos;
            });
      });
      }
    </script> -->
</body>
</html>
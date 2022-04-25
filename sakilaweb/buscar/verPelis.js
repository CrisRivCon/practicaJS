
let btnBuscar = document.getElementById('buscar');
let url;
btnBuscar.addEventListener('click', (event)=>{
  //let cuerpo = document.getElementById('tabla_buscar');
  //if(cuerpo){cuerpo.remove()}
  console.log(document.getElementById('titulo').value);
  console.log(document.getElementById('nombre').value);
  const data = new FormData();
  let titulo = document.getElementById('titulo').value;
  let nombre = document.getElementById('nombre').value;
  if(titulo!=""){
    var url = 'buscarPeliculas.php';
    data.append = ('title', titulo);
    console.log("titulo de pelicula");
  } else if(nombre!=""){
    var url = 'buscarActor.php';
    data.append = ('nombre', nombre);
    console.log('nombre de actor');
  }
  fetch(url, {
    method: 'POST',
     type: 'JSON',
    body: data
  })
  .then(function(response) {
    if(response.status==200) {
         return response.json();
    } else {
        throw "Error en la llamada AJAX";
    }
  })
  .then(function(data) {
    if(!data.length){
      console.log("Está vacio");
      let infoRegistro = "<p class=\"\">No se han econtrado registros</p>";
      document.getElementById('tabla').innerHTML = infoRegistro;


    }else{
      let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
      <thead class="bg-info">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Release Year</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>`;
      document.getElementById('tabla').innerHTML = crearTabla;
      let cuerpoTabla = document.createElement('tbody');
      let tabla = document.querySelector('#tabla table');
      tabla.append(cuerpoTabla);
      let cuerpo = document.querySelector('#tabla tbody');

        for(item in data){
          //console.log(data[item]);
          let pelicula = data[item];
          let fila= document.createElement('tr');
          fila.setAttribute('id', pelicula['film_id']);
          cuerpo.append(fila);
          let columnas = `<th scope=\"row\">${pelicula['film_id']}</th>
                        <td class=\"${pelicula['film_id']}\">${pelicula['title']}</td>
                        <td class=\"${pelicula['film_id']}\">${pelicula['release_year']}</td>
                        <td class=\"text-center\">
                          <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                            <div class=\"btn-group\" role=\"group\">
                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                Opciones
                              </button>
                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                <a class=\"dropdown-item desasignar-pelicula\" id=\"${pelicula['film_id']}_${idFila}\" href=\"#\" data-toggle=\"modal\" data-target=\"#desasignar_pelicula\">Desasignar</a>
                              </div>
                            </div>
                          </div>
                        </td>`;
            fila.innerHTML = columnas;
        }
        $('.desasignar-pelicula').on('click', (event)=>{
          let idFila = event.currentTarget.id;
          btnDesasignar.setAttribute('data-id', idFila);
          //let idActor = event.dataset.indexNumber
      })
  } 
  })
  .catch(function(err) {
    console.log(err);
  });
  });


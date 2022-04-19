$('.ver-peliculas').on('click', (event)=>{
  

var url = 'asignarPeliculas.php';
const data = new FormData();
data.append('actor_id', idFila);

fetch(url, {
  method: 'POST',
   type: 'JSON',
  body: data,
})
.then(function(response) {
  console.log(response);
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
    document.querySelector('#ver_peliculas .modal-body').innerHTML = infoRegistro;


  }else{
    let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white">
    <thead class="bg-info">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Release Year</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>`;
    document.querySelector('#ver_peliculas .modal-body').innerHTML = crearTabla;
    let cuerpoTabla = document.createElement('tbody');
    let tabla = document.querySelector('#ver_peliculas table');
    tabla.append(cuerpoTabla);
    let cuerpo = document.querySelector('#ver_peliculas tbody');

      for(item in data){
        //console.log(data[item]);
        let pelicula = data[item];
        let fila= document.createElement('tr');
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
        console.log(event);
        let idFila = event.currentTarget.id;
        console.log(idFila);
        btnDesasignar.setAttribute('data-id', idFila);
        //let idActor = event.dataset.indexNumber
    })
} 
})
.catch(function(err) {
  console.log(err);
});
});

$('#ver_peliculas').on('hidden.bs.modal', function (event) {
  let cuerpo = document.querySelector('#ver_peliculas tbody');
  if(cuerpo){cuerpo.remove()}
})


/* Para desasignar peliculas de actores*/

let btnDesasignar = document.getElementById("desasignar-pelicula");

/* $('.desasignar_pelicula').on('click', (event)=>{
    console.log(event);
    let idFila = event.currentTarget.id;
    console.log(idFila);
    btnDesasignar.setAttribute('data-id', idFila);
    //let idActor = event.dataset.indexNumber
}) */

btnDesasignar.addEventListener("click", event=>{
    let idPelicula = btnDesasignar.dataset.id;
    var regex = /(\d+)/g;

    console.log(idPelicula.match(regex));
    let  idFilm = idPelicula.match(regex)[0];
    let  idActor = idPelicula.match(regex)[1];
    console.log(idFilm);
    console.log(idActor);

    const data = new FormData();
    data.append('film_id', idFilm)
    data.append('actor_id', idActor)

    fetch('desasignarPelicula.php', {
        method: 'POST',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(data => console.log(data))
     .catch(function(err) {
        console.log(err);
     });
})

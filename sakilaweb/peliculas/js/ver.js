
$('#ver_actores').on('show.bs.modal', (event)=>{
  let idFila = event.relatedTarget.id;
//console.log('id fila: '+idFila);
var url = 'ver.php';
const data = new FormData();
data.append('film_id', idFila);
fetch(url, {
  method: 'POST',
   type: 'JSON',
  body: data,
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
    document.querySelector('#ver_actores .modal-body').innerHTML = infoRegistro;


  }else{
    let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white">
    <thead class="bg-info">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>`;
    document.querySelector('#ver_actores .modal-body').innerHTML = crearTabla;
    let cuerpoTabla = document.createElement('tbody');
    let tabla = document.querySelector('#ver_actores table');
    tabla.append(cuerpoTabla);
    let cuerpo = document.querySelector('#ver_actores tbody');

      for(item in data){
        //console.log(data[item]);
        let pelicula = data[item];
        let fila= document.createElement('tr');
        fila.setAttribute('id', pelicula['actor_id']);
        cuerpo.append(fila);
        let columnas = `<th scope=\"row\">${pelicula['actor_id']}</th>
                      <td class=\"${pelicula['actor_id']}\">${pelicula['first_name']}</td>
                      <td class=\"${pelicula['actor_id']}\">${pelicula['last_name']}</td>
                      <td class=\"text-center\">
                        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                          <div class=\"btn-group\" role=\"group\">
                            <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                              Opciones
                            </button>
                            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                              <a class=\"dropdown-item desasignar-pelicula\" id=\"${pelicula['actor_id']}_${idFila}\" href=\"#\" data-toggle=\"modal\" data-target=\"#desasignar_pelicula\">Desasignar</a>
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

$('#ver_actores').on('hidden.bs.modal', function (event) {
  let cuerpo = document.querySelector('#ver_actores tbody');
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

    let  idFilm = idPelicula.match(regex)[0];
    let  idActor = idPelicula.match(regex)[1];

    const data = new FormData();
    data.append('actor_id', idFilm)
    data.append('film_id', idActor)

    fetch('desasignar.php', {
        method: 'POST',
        type: 'JSON',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.json()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(data =>{
      let fila = document.getElementById(data['actor_id']);
      fila.remove();
   })
     .catch(function(err) {
        console.log(err);
     });
})

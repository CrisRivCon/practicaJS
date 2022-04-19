//var btnVerPeliculas = document.getElementById('ver-peliculas');

$('.ver-peliculas').on('click', (event)=>{
  let idFila = event.currentTarget.id;
console.log('id fila: '+idFila);
var url = 'verPeliculas.php';
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
  //console.log(data);
  let tabla = document.querySelector('#ver_peliculas table');
  let cuerpoTabla = document.createElement('tbody');
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
                            <a class=\"dropdown-item editar-pelicula\" href=\"#\" id=\"${pelicula['film_id']}\" data-toggle=\"modal\" data-target=\"#editar_pelicula\">Editar</a>
                            <a class=\"dropdown-item eliminar-pelicula\" id=\"${pelicula['film_id']}\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_pelicula\">Eliminar</a>
                          </div>
                        </div>
                      </div>
                    </td>`;
        fila.innerHTML = columnas;
    } 
})
.catch(function(err) {
  console.log(err);
});
});

$('#ver_peliculas').on('hidden.bs.modal', function (event) {
  let cuerpo = document.querySelector('#ver_peliculas tbody');
  cuerpo.remove();
})

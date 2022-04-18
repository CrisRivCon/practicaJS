//var btnVerPeliculas = document.getElementById('ver-peliculas');

$('.ver-peliculas').on('click', (event)=>{
  let idFila = event.currentTarget.id;
  //btnVerPeliculas.setAttribute('data-id', idFila);
  //let idFilm = btnVerPeliculas.dataset.id;


 /* const data = new FormData();
  data.append('actor_id', idFila)
  fetch('verPeliculas.php', {
      method: 'POST',
      body: data
  })
    .then(response => console.log(response.json()))
   .then(function(response) {
       if(response.ok) {
          return response.text()
      } else {
          throw "Error en la llamada Ajax";
      } 
   }) 
   //.then(data => console.log(data))
   //.catch(err => console.log(err));
})*/

var url = 'verPeliculas.php';
//const data = new FormData();
//data.append('actor_id', idFila);

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({actor_id: idFila}) // data can be `string` or {object}!
/*   headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  } */
}).then(response =>{
    let resp = JSON.stringify(response)
    res = JSON.parse(resp)
    console.log(res)
  })
.catch(error => console.error('Error:', error))
.then(data => {
  console.log(data);
  for (const key in data) {
      const element = data[key];
      console.log(element);
      let datos = `<tr>
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
    </tr>`;
    //document.querySelector('.card-body').innerHTML = datos;
  }
  
  
});
});

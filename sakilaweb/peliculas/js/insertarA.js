
 
  let url = 'insertar.php';
  let formInsert = document.getElementById('form_insertar_actor');
  let inputFile = document.getElementById('form_img');
  let preview = document.getElementById('preview');
  let btnInsertar = document.getElementById('insertar_actor');
  let imagen = inputFile.files;
  let tamañoMax = 5000;


btnInsertar.addEventListener("click", event=>{
  event.preventDefault();
    const data = new FormData(document.getElementById('form_insertar_actor'));
    data.append('file', imagen);

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
    .then(data => {
      console.log(data['actor_id']);
    
    /*   let nuevaFila = `<tr id="f${data['actor_id']}.">
                          <th scope=\"row\">${data['actor_id']}</th>
                          <td class=\"${data['actor_id']}\">${data['first_name']}</td>
                          <td class=\"${data['actor_id']}\">${data['last_name']}</td>
                          <td class=\"${data['actor_id']}\"><img src=\"img/${data['img']}\"/}></td>
                          <td class=\"text-center\">
                              <div class=z\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                                <div class=\"btn-group\" role=\"group\">
                                  <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                    Opciones
                                  </button>
                                  <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                    <a class=\"dropdown-item editar-actor\" href=\"#\" id=\"${data['actor_id']}\" data-toggle=\"modal\" data-target=\"#editar_actor\">Editar</a>
                                    <a class=\"dropdown-item eliminar-actor\" id=\"${data['actor_id']}\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_actor\">Eliminar</a>
                                    <a class=\"dropdown-item ver-peliculas\" href=\"#\" id=\"${data['actor_id']}\" data-toggle=\"modal\" data-target=\"#ver_peliculas\">Ver Peliculas</a>
                                  </div>
                                </div>
                              </div>
                          </td>
                        </tr>` */
        
    })

    .catch(function(err) {
        console.log(err);
    });
  }
})

/*   var actorId = document.getElementById("actor").value;
  var filmId = document.getElementById("film").value;

  data.append('actor_id', actorId);
  data.append('film_id', filmId);
  console.log(data);

  fetch(url, {
    method: 'POST',
    type: 'JSON',
    body: data,
  })
  .then(response=> {
    console.log(response);
    if(response.status==200) {
        return response.json();
    } else {
        throw "Error en la llamada AJAX";
    }
  })
  .then(data => console.log(data))
  .catch(function(err) {
    console.log(err);
  });
});
 */
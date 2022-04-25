
 
  let url = 'insertar.php';
  let formInsert = document.getElementById('form_insertar_actor');
  let preview = document.getElementById('preview');
  let btnInsertar = document.getElementById('insertar_actor');
  
//Enviar los datos para insertarlos en la BD

btnInsertar.addEventListener("click", event=>{
  event.preventDefault();
    const data = new FormData(document.getElementById('form_insertar_actor'));
    //data.append('file', imagen);

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
      let id = data['film_id'];
      let cuerpo = document.getElementById('cuerpo_tabla');
      let fil = document.createElement('tr');
      fil.setAttribute('id', 'f'+id);
      let nuevaFila = `<th scope=\"row\">${data['film_id']}</th>
                          <td class=\"${data['film_id']}\">${data['title']}</td>
                          <td class=\"${data['film_id']}\">${data['description']}</td>
                          <td class=\"text-center\">
                              <div class=z\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">
                                <div class=\"btn-group\" role=\"group\">
                                  <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">
                                    Opciones
                                  </button>
                                  <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">
                                    <a class=\"dropdown-item editar-actor\" href=\"#\" id=\"${data['film_id']}\" data-toggle=\"modal\" data-target=\"#editar_actor\">Editar</a>
                                    <a class=\"dropdown-item eliminar-actor\" id=\"${data['film_id']}\" href=\"#\" data-toggle=\"modal\" data-target=\"#eliminar_actor\">Eliminar</a>
                                    <a class=\"dropdown-item ver-peliculas\" href=\"#\" id=\"${data['film_id']}\" data-toggle=\"modal\" data-target=\"#ver_peliculas\">Ver Peliculas</a>
                                  </div>
                                </div>
                              </div>
                          </td>
                        </tr>`;
      fil.innerHTML = nuevaFila;
      cuerpo.prepend(fil);

      let btnEliminar = document.getElementById("eliminar-actor");

      $('.eliminar-actor').on('click', (event)=>{
          let idFila = event.currentTarget.id;
          btnEliminar.setAttribute('data-id', idFila);
      })
    })

    .catch(function(err) {
        console.log(err);
    });

})

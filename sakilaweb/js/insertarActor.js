
 
  let url = 'insertarActor.php';
  let formInsert = document.getElementById('form_insertar_actor');
  let inputFile = document.getElementById('form_img');
  let preview = document.getElementById('preview');
  let btnInsertar = document.getElementById('insertar_actor');
  let imagen = inputFile.files;
  let tamanoMax = 5000;
  let minNumCaracteres = 4;
  let maxNumCaracteres = 10;

  inputFile.addEventListener('change', event =>{
    let number = imagen[0].size;
    if(validFileType(imagen[0])){
      if(imagen.length === 0) {
        preview.innerHTML = 'No files currently selected for upload';
      }else{
        preview.innerHTML = imagen[0].name+"..."+ returnFileSize(number);
      }
    }else preview.innerHTML = 'El tipo de archivo no es válido.';
  });

  function returnFileSize(number) {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number >= 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number >= 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }

  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(imagen) {
    return fileTypes.includes(imagen.type);
  }

//Enviar los datos para insertarlos en la BD

btnInsertar.addEventListener("click", event=>{
  event.preventDefault();
  if(validFileType(imagen[0])&&imagen[0].size<tamanoMax){
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
        if(data['actor_id']){
          let id = data['actor_id'];
          let cuerpo = document.getElementById('cuerpo_tabla');
          let fil = document.createElement('tr');
          fil.setAttribute('id', 'f'+id);
          let nuevaFila = `<th scope=\"row\">${data['actor_id']}</th>
                              <td class=\"${data['actor_id']}\">${data['first_name']}</td>
                              <td class=\"${data['actor_id']}\">${data['last_name']}</td>
                              <td class=\"${data['actor_id']} text-center\">
                                  <div class=\"flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6\">
                                    <a data-caption=\"Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. \"
                                      data-fancybox=\"gallery\" href=\"img/${data['img']}\">
                                      <img class=\"rounded\" id=\"${data['actor_id']}\" src=\"img/${data['img']}\"/>
                                  </a>
                                  </div>
                              </td>
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
                            </tr>`;
          fil.innerHTML = nuevaFila;
          cuerpo.prepend(fil);

          let btnEliminar = document.getElementById("eliminar-actor");

          $('.eliminar-actor').on('click', (event)=>{
              let idFila = event.currentTarget.id;
              btnEliminar.setAttribute('data-id', idFila);
          })
          formInsert.reset();
          preview.innerHTML = 'Selecciona una imagen...';

        }else{
          console.log(data);
          formInsert.reset();
          preview.innerHTML = 'Selecciona una imagen...';
        }
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
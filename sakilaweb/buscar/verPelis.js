
let btnBuscar = document.getElementById('buscar');
let url;
btnBuscar.addEventListener('click', (event)=>{
  event.preventDefault();
 

  let titulo = document.getElementById('titulo').value;
  let nombre = document.getElementById('nombre').value;

  if(titulo!=""||nombre!=""){
    const data = new FormData(document.getElementById('form_buscar'));
    //data.append = ('title', titulo);
    //data.append = ('first_name', nombre);
    
    fetch('buscarPeliculas.php', {
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
          </tr>
        </thead>`;
        document.getElementById('tabla').innerHTML = crearTabla;
        let cuerpoTabla = document.createElement('tbody');
        let tabla = document.querySelector('#tabla table');
        tabla.append(cuerpoTabla);
        let cuerpo = document.querySelector('#tabla tbody');
          if (data.length>0&&data[0]['film_id']){
            for(item in data){
              let pelicula = data[item];
              let fila= document.createElement('tr');
              fila.setAttribute('id', pelicula['film_id']);
              cuerpo.append(fila);
              let columnas = `<th scope=\"row\">${pelicula['film_id']}</th>
                            <td class=\"${pelicula['film_id']}\">${pelicula['title']}</td>
                            <td class=\"${pelicula['film_id']}\">${pelicula['description']}</td>`;
                fila.innerHTML = columnas;
            }
        }else  if (data.length>0&&data[0]['actor_id']){
          for(item in data){
            let actor = data[item];
            let fila= document.createElement('tr');
            fila.setAttribute('id', actor['actor_id']);
            cuerpo.append(fila);
            let columnas = `<th scope=\"row\">${actor['actor_id']}</th>
                          <td class=\"${actor['actor_id']}\">${actor['first_name']}</td>
                          <td class=\"${actor['actor_id']}\">${actor['last_name']}</td>`;
              fila.innerHTML = columnas;
          }
      }
    } 
    
    document.getElementById('form_buscar').reset();
    })
    .catch(function(err) {
      console.log(err);
    });
  }else {console.log('No hay datos que buscar');}
});


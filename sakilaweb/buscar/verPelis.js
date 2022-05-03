
let btnBuscar = document.getElementById('buscar');
let url;
btnBuscar.addEventListener('click', (event)=>{
  event.preventDefault();

  let titulo = document.getElementById('titulo').value;
  let nombre = document.getElementById('nombre').value;

  if(titulo!=""||nombre!=""){
    const data = new FormData(document.getElementById('form_buscar'));
    
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
          if (data.length>0&&data[0]['film_id']&&!data[0]['actor_id']){
            let crearTabla = `<table class="table table-hover table-striped  table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
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
          }else  if (data.length>0&&data[0]['actor_id']&&!data[0]['film_id']){
            let crearTabla = `<table class="table table-hover table-striped  table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
                                <thead class="bg-info">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">first_name</th>
                                    <th scope="col">last_name</th>
                                  </tr>
                                </thead>`;
          document.getElementById('tabla').innerHTML = crearTabla;
          let cuerpoTabla = document.createElement('tbody');
          let tabla = document.querySelector('#tabla table');
          tabla.append(cuerpoTabla);
          let cuerpo = document.querySelector('#tabla tbody');
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
          }else if(data.length&&data[0].length&&data[1].length&&data[0][0]['actor_id']&&data[1][0]['film_id']){
            let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
                                  <thead class="bg-info">
                                    <tr>
                                      <th scope="col">Actores</th>
                                      <th scope="col">First_name</th>
                                      <th scope="col">Last_name</th>
                                    </tr>
                                  </thead>`;
            document.getElementById('tabla').innerHTML = crearTabla;
            let cuerpoTabla = document.createElement('tbody');
            let tabla = document.querySelector('#tabla table');
            tabla.append(cuerpoTabla);
            let cuerpo = document.querySelector('#tabla tbody');
              for(item in data[0]){
                let actor = data[0][item];
                let fila= document.createElement('tr');
                fila.setAttribute('id', actor['actor_id']);
                cuerpo.append(fila);
                let columnas = `<th scope=\"row\">${actor['actor_id']}</th>
                              <td class=\"${actor['actor_id']}\">${actor['first_name']}</td>
                              <td class=\"${actor['actor_id']}\">${actor['last_name']}</td>`;
                  fila.innerHTML = columnas;
              }
              let crearCabeceraSegunda = document.createElement('thead');
              crearCabeceraSegunda.setAttribute('class', 'bg-info');
              crearCabeceraSegunda.setAttribute('id', 'segunda_cabecera');
              let crearFilaSegunda = `<tr>
                                        <th scope="col">Peliculas</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Description</th>
                                      </tr>`;

            crearCabeceraSegunda.innerHTML = crearFilaSegunda;
            let cuerpoTablaPeli = document.createElement('tbody');
            let tablaPeli = document.querySelector('#tabla table');
            tablaPeli.append(crearCabeceraSegunda);
            tablaPeli.append(cuerpoTablaPeli);
              for(item in data[1]){
                let actor = data[1][item];
                let fila= document.createElement('tr');
                fila.setAttribute('id', actor['film_id']);
                cuerpoTablaPeli.append(fila);
                let columnas = `<th scope=\"row\">${actor['film_id']}</th>
                              <td class=\"${actor['film_id']}\">${actor['title']}</td>
                              <td class=\"${actor['film_id']}\">${actor['description']}</td>`;
                  fila.innerHTML = columnas;
              }
          }else if(!data[0].length&&data[1].length&&data[1][0]['film_id']){
            console.log('no hay actor');
            let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
                                  <thead class="bg-info">
                                    <tr>
                                      <th scope="col" colspan="3">Actores</th>
                                    </tr>
                                  </thead>`;
            document.getElementById('tabla').innerHTML = crearTabla;
            let cuerpoTabla = document.createElement('tbody');
            let tabla = document.querySelector('#tabla table');
            tabla.append(cuerpoTabla);
            let cuerpo = document.querySelector('#tabla tbody');
            let fila= document.createElement('tr');
            cuerpo.append(fila);
            let columnas = `<th scope=\"row\" colspan="3">No se han encontrado actores que coincidan</th>`;
            fila.innerHTML = columnas;

              let crearCabeceraSegunda = document.createElement('thead');
              crearCabeceraSegunda.setAttribute('class', 'bg-info');
              crearCabeceraSegunda.setAttribute('id', 'segunda_cabecera');
              let crearFilaSegunda = `<tr>
                                        <th scope="col">Peliculas</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Description</th>
                                      </tr>`;

            crearCabeceraSegunda.innerHTML = crearFilaSegunda;
            let cuerpoTablaPeli = document.createElement('tbody');
            let tablaPeli = document.querySelector('#tabla table');
            tablaPeli.append(crearCabeceraSegunda);
            tablaPeli.append(cuerpoTablaPeli);
              for(item in data[1]){
                let actor = data[1][item];
                let fila= document.createElement('tr');
                fila.setAttribute('id', actor['film_id']);
                cuerpoTablaPeli.append(fila);
                let columnas = `<th scope=\"row\">${actor['film_id']}</th>
                              <td class=\"${actor['film_id']}\">${actor['title']}</td>
                              <td class=\"${actor['film_id']}\">${actor['description']}</td>`;
                  fila.innerHTML = columnas;
              }
          }else if(!data[1].length&&data[0].length&&data[0][0]['actor_id']){
            let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
                                  <thead class="bg-info">
                                    <tr>
                                      <th scope="col" colspan="3">Peliculas</th>
                                    </tr>
                                  </thead>`;
            document.getElementById('tabla').innerHTML = crearTabla;
            let cuerpoTabla = document.createElement('tbody');
            let tabla = document.querySelector('#tabla table');
            tabla.append(cuerpoTabla);
            let cuerpo = document.querySelector('#tabla tbody');
            let fila= document.createElement('tr');
            cuerpo.append(fila);
            let columnas = `<th scope=\"row\" colspan="3">No se han encontrado peliculas que coincidan</th>`;
            fila.innerHTML = columnas;

              let crearCabeceraSegunda = document.createElement('thead');
              crearCabeceraSegunda.setAttribute('class', 'bg-info');
              crearCabeceraSegunda.setAttribute('id', 'segunda_cabecera');
              let crearFilaSegunda = `<tr>
                                        <th scope="col">Actores</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                      </tr>`;

            crearCabeceraSegunda.innerHTML = crearFilaSegunda;
            let cuerpoTablaPeli = document.createElement('tbody');
            let tablaPeli = document.querySelector('#tabla table');
            tablaPeli.append(crearCabeceraSegunda);
            tablaPeli.append(cuerpoTablaPeli);
              for(item in data[0]){
                let actor = data[0][item];
                let fila= document.createElement('tr');
                fila.setAttribute('id', actor['actor_id']);
                cuerpoTablaPeli.append(fila);
                let columnas = `<th scope=\"row\">${actor['actor_id']}</th>
                              <td class=\"${actor['actor_id']}\">${actor['first_name']}</td>
                              <td class=\"${actor['actor_id']}\">${actor['last_name']}</td>`;
                  fila.innerHTML = columnas;
              }
          }else if(!data[1].length&&!data[0].length){
            let crearTabla = `<table class="table table-hover table-striped table-responsive-md table-info p-md-3 m-md-2 text-white" id="tabla_buscar">
                                  <thead class="bg-info">
                                    <tr>
                                      <th scope="col" colspan="3">Peliculas</th>
                                    </tr>
                                  </thead>`;
            document.getElementById('tabla').innerHTML = crearTabla;
            let cuerpoTabla = document.createElement('tbody');
            let tabla = document.querySelector('#tabla table');
            tabla.append(cuerpoTabla);
            let cuerpo = document.querySelector('#tabla tbody');
            let fila= document.createElement('tr');
            cuerpo.append(fila);
            let columnas = `<th scope=\"row\" colspan="3">No se han encontrado peliculas que coincidan</th>`;
            fila.innerHTML = columnas;

              let crearCabeceraSegunda = document.createElement('thead');
              crearCabeceraSegunda.setAttribute('class', 'bg-info');
              crearCabeceraSegunda.setAttribute('id', 'segunda_cabecera');
              let crearFilaSegunda = `<tr>
                                        <th scope="col">Actores</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                      </tr>`;

            crearCabeceraSegunda.innerHTML = crearFilaSegunda;
            let cuerpoTablaPeli = document.createElement('tbody');
            let tablaPeli = document.querySelector('#tabla table');
            tablaPeli.append(crearCabeceraSegunda);
            tablaPeli.append(cuerpoTablaPeli);
            let fila1= document.createElement('tr');
            cuerpoTablaPeli.append(fila1);
            
            let columnas1 = `<th scope=\"row\" colspan="3">No se han encontrado actores que coincidan</th>`;
            fila1.innerHTML = columnas1;
          }
    } 
    document.getElementById('form_buscar').reset();
    })
    .catch(function(err) {
      console.log(err);
    });
  }else {console.log('No hay datos que buscar');}
});


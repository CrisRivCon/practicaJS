
$('#btn_asignar').on('click', (event)=>{
  
  var actorId = document.getElementById("actor").value;
  let actorVal = isNaN(actorId);
  var filmId = document.getElementById("film").value;
  let filmVal = isNaN(filmId);

  if(actorVal==false&& filmVal==false){

    const url = 'asignarPelicula.php';
    const data = new FormData();

    data.append('actor_id', actorId);
    data.append('film_id', filmId);

    fetch(url, {
      method: 'POST',
      type: 'JSON',
      body: data,
    })
    .then(response=> {
      if(response.status==200) {
          return response.json();
      } else {
          throw "Error en la llamada AJAX";
      }
    })
    .then(data =>{
      let error = data['error'];
      let success = data['success'];
      let pie = document.getElementById('pie_modal_asignar');
      if(error){
        if(error=='1'){
          let alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Algo no va bien! El método no es correcto o los campos están vacíos.</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
          pie.innerHTML=alert;
        }else if(error=='2'){
          let alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>El actor o la película no existe!</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
          pie.innerHTML=alert;
        }else if(error=='3'){
          let alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Ya están asociados.</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
          pie.innerHTML=alert;
        }
      }else if(success){
        let alert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Se han asociado con exito.</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`
          pie.innerHTML=alert;
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  }else console.log('La asignacion no es valida');
});

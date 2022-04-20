
$('#btn_asignar').on('click', (event)=>{
  
  var url = 'asignarPelicula.php';

  const data = new FormData();

  var actorId = document.getElementById("actor").value;
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

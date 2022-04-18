//var btnVerPeliculas = document.getElementById('ver-peliculas');

$('.ver-peliculas').on('click', (event)=>{
  let idFila = event.currentTarget.id;
console.log('id fila: '+idFila);
var url = 'verPeliculas.php';
const data = new FormData();
data.append('actor_id', idFila);
fetch(url, {
  method: 'POST',
  body: data,
})
.then(function(response) {
  if(response.ok) {
      return response.text()
  } else {
      throw "Error en la llamada AJAX";
  }
})
.then(function(data) {
  console.log(data);
})
.catch(function(err) {
  console.log(err);
});

});

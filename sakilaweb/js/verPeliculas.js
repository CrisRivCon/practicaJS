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
  if(response.ok) {
       return response.json();
  } else {
      throw "Error en la llamada AJAX";
  }
})
.then(function(data) {
  console.log(data);
   for(item in data){
    console.log(data[item]);
  } 
})
.catch(function(err) {
  console.log(err);
});

});

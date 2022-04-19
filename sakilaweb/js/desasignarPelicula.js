let btnDesasignar = document.getElementById("desasignar-pelicula");
console.log(btnDesasignar);

$('a.desasignar-pelicula').on('click', (event)=>{
    let idFila = event.currentTarget.id;
    console.log(idFila);
    btnDesasignar.setAttribute('data-id', idFila);
    //let idActor = event.dataset.indexNumber
})

btnDesasignar.addEventListener("click", event=>{
    let idPelicula = btnDesasignar.dataset.id;
    var regex = /(\d+)/g;

    console.log(idPelicula.match(regex)); 

    const data = new FormData();
    data.append('film_id', idPelicula)
    data.append('actor_id', idActor)

    fetch('desasignarPelicula.php', {
        method: 'POST',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.text()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(data => console.log(data))
     .catch(function(err) {
        console.log(err);
     });
})

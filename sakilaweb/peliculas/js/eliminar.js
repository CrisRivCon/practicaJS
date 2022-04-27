let btnEliminar = document.getElementById("eliminar-actor");

$('#eliminar_pelicula').on('show.bs.modal', (event)=>{
    let idFila = event.relatedTarget.id;
    btnEliminar.setAttribute('data-id', idFila);
})

btnEliminar.addEventListener("click", event=>{
    let idActor = btnEliminar.dataset.id;

    const data = new FormData();
    data.append('film_id', idActor)

    fetch('eliminar.php', {
        method: 'POST',
        type: 'JSON',
        body: data
    })
    .then(function(response) {
        if(response.ok) {
            return response.json()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(data =>{
         let fila = document.getElementById("f"+data['film_id']);
         fila.remove();
     })
     .catch(function(err) {
        console.log(err);
     });
})

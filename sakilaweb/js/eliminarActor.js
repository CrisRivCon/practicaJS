let btnEliminar = document.getElementById("eliminar-actor");

$('.eliminar-actor').on('click', (event)=>{
    let idFila = event.currentTarget.id;
    btnEliminar.setAttribute('data-id', idFila);
})

btnEliminar.addEventListener("click", event=>{
    let idActor = btnEliminar.dataset.id;

    const data = new FormData();
    data.append('actor_id', idActor)

    fetch('eliminarActor.php', {
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

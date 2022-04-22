let btnEliminar = document.getElementById("eliminar-actor");

$('.eliminar-actor').on('click', (event)=>{
    let idFila = event.currentTarget.id;
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

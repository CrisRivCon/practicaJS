let btnActualizar = document.getElementById("actualizar-actor");
//Rellenar formulario con datos de la tabla
$('#editar_pelicula').on('show.bs.modal', (event)=>{
    let idFila = event.relatedTarget.id;
    btnActualizar.setAttribute('data-id', idFila);
    for (const key in $('td.'+idFila)) {
            const element = $('td.'+idFila)[key];
            $('#editar_pelicula input')[key].value = element.innerHTML;
    }
})

//Enviar los datos para insertarlos en la BD
btnActualizar.addEventListener("click", event=>{
    const data = new FormData(document.getElementById("form_editar_actor"));
    let idActor = btnActualizar.dataset.id;
    data.append('film_id', idActor);
    fetch('editar.php', {
        method: 'POST',
        type: 'JSON',
        body: data
    })
    .then(response => response.json())
    .then(response => {
        let fila = Array.from(document.getElementsByClassName(idActor));
                fila[0].textContent = response['title'];
                fila[1].textContent = response['description'];
    })

     .catch(function(err) {
        console.log(err);
     });
})

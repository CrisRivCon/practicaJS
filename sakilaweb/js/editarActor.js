let btnActualizar = document.getElementById("actualizar-actor");
//Rellenar formulario con datos de la tabla
$('.editar-actor').on('click', (event)=>{
    let idFila = event.currentTarget.id;
    btnActualizar.setAttribute('data-id', idFila);
    for (const key in $('td.'+idFila)) {
            const element = $('td.'+idFila)[key];
            $('#editar_actor input')[key].value = element.innerHTML;
    }
})

//Enviar los datos para insertarlos en la BD
btnActualizar.addEventListener("click", event=>{
    const data = new FormData(document.getElementById("form_editar_actor"));
    let idActor = btnActualizar.dataset.id;
    data.append('actor_id', idActor);
    fetch('actualizarActor.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(response => console.log(response))
/*     .then(function(response) {
        if(response.ok) {
            return response.json()
        } else {
            throw "Error en la llamada Ajax";
        }
     })
     .then(myjson => {
        console.log(json);
        for (const key in $('td.'+idActor)) {
            const element = $('td.'+idActor)[key];
            console.log(data);
            //element.innerHTML = $('#editar_actor input')[key].value;
           // document.querySelector('.card-body').innerHTML = datos;
        }
    }) */
     .catch(function(err) {
        console.log(err);
     });
})

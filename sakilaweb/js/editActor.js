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
        type: 'JSON',
        body: data
    })
    .then(response =>{ return response.json()})
    .then(response => {
        let fila = Array.from(document.getElementsByClassName(idActor));
                fila[0].textContent = response['first_name'];
                fila[1].textContent = response['last_name'];
    })

     .catch(function(err) {
        console.log(err);
     });
})

let btnActualizar = document.getElementById("actualizar-pelicula");
//Rellenar formulario con datos de la tabla
$('.editar-pelicula').on('click', (event)=>{
    let idFila = event.currentTarget.id;
    btnActualizar.setAttribute('data-id', idFila);
    for (const key in $('td.'+idFila)) {
            const element = $('td.'+idFila)[key];
            $('#editar_pelicula input')[key].value = element.innerHTML;
    }
})

//Enviar los datos para insertarlos en la BD
btnActualizar.addEventListener("click", event=>{
    const data = new FormData(document.getElementById("form_editar_pelicula"));
    let idPelicula = btnActualizar.dataset.id;
    data.append('film_id', idPelicula);
    fetch('actualizarPelicula.php', {
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
        for (const key in $('td.'+idPelicula)) {
            const element = $('td.'+idPelicula)[key];
            console.log(data);
            //element.innerHTML = $('#editar_Pelicula input')[key].value;
           // document.querySelector('.card-body').innerHTML = datos;
        }
    }) */
     .catch(function(err) {
        console.log(err);
     });
})

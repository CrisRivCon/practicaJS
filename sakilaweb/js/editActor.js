let btnActualizar = document.getElementById("actualizar-actor");
let inputImg = 2;
let modalPreview = document.getElementById('modal_preview');
let modalInputFile = document.getElementById('modal_form_img');
let modalImagen = modalInputFile.files;



//Rellenar formulario con datos de la tabla
$('#editar_actor').on('show.bs.modal', (event)=>{
    let idFila = event.relatedTarget.id;
    btnActualizar.setAttribute('data-id', idFila);

    for (const key in $('td.'+idFila)) {
        if(key<inputImg){
            const element = $('td.'+idFila)[key];
            document.querySelectorAll('#editar_actor input')[key].value = element.innerHTML;
        }else if(key == inputImg){
            const element = $('img#'+idFila).attr('src') ;
            if(element !== "img/"){
                let regExp = /\/([^/]+)*/; 
                let text =  regExp.exec(element);
                modalPreview.innerHTML= text[1];
            }else{modalPreview.innerHTML= "No tiene imagen";}

        }
    }
})

modalInputFile.addEventListener('change', event =>{
    let number = modalImagen[0].size;
    if(validFileType(modalImagen[0])){
      if(modalImagen.length === 0) {
       modalPreview.innerHTML = 'No files currently selected for upload';
      }else{
       modalPreview.innerHTML = modalImagen[0].name+"..."+ returnFileSize(number);
      }
    }else modalPreview.innerHTML = 'El tipo de archivo no es válido.';
  });


//Enviar los datos para insertarlos en la BD
btnActualizar.addEventListener("click", event=>{
    event.preventDefault();
    if(modalImagen[0]){

        if(validFileType(modalImagen[0])&&modalImagen[0].size<tamanoMax){
            const data = new FormData(document.getElementById("form_editar_actor"));
            let idActor = btnActualizar.dataset.id;
            data.append('actor_id', idActor);
            data.append('file', modalImagen);

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
                $('img#'+idActor).attr('src', 'img/'+response['img']) 
            })

            .catch(function(err) {
                console.log(err);
            });
            document.getElementById("form_editar_actor").reset();
        }
    }else {

        const data = new FormData(document.getElementById("form_editar_actor"));
        let idActor = btnActualizar.dataset.id;
        data.append('actor_id', idActor);

        fetch('actualizarActor.php', {
            method: 'POST',
            type: 'JSON',
            body: data
        })
        .then(response =>{return response.json()})
        .then(response => {
            let fila = Array.from(document.getElementsByClassName(idActor));
                    fila[0].textContent = response['first_name'];
                    fila[1].textContent = response['last_name'];
        })
        .catch(function(err) {
            console.log(err);
        });
    }
})

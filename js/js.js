var saveBtn = document.getElementById("boton_guardar");
var numFila = 0;
//var id = 1;
//var numeroBoton = 0; /* nº de fila y de boton pueden ser iguales, te sobra una variable => numelemento */
//boton ?? guardar o actualizar ? las variables deben ser descriptivas
saveBtn.addEventListener("click", function(event){  //Boton para guardar en la tabla la informacion de los input
    numFila++;
    //numeroBoton++;
    let inputNombre = document.getElementById("form_input_1");
    let inputApellidos = document.getElementById("form_input_2");
    let inputEmail = document.getElementById("form_input_3");
    if((inputNombre.value !== "")&&(inputApellidos.value !== "")&&(inputEmail.value !== "")){
    let fila = document.createElement("tr");
    fila.setAttribute("id", "elem_tabla_fila"+numFila);
    fila.setAttribute("data-index-number", 'fila'+numFila)

    for(let i = 1; i<5; i++){
        let campo = document.createElement("td");
        let texto = document.getElementById("form_input_"+i).value;
        campo.setAttribute("id", "elem_tabla_"+numFila+"_"+i);
        campo.innerHTML = texto;
        fila.append(campo);
    };

    document.querySelector("tbody").append(fila);
    //EditBtn por ej
    let editBtn = document.createElement("button");//Crear boton modificar
    editBtn.setAttribute("id", "elem_tabla_"+numFila);
    editBtn.setAttribute("class", "btn btn-secondary w-50");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("data-toggle", "modal");
    editBtn.setAttribute("data-target", "#modal_edit");
    editBtn.setAttribute("data-index-number", numFila);//----------------------
    editBtn.innerHTML = "Editar";
    document.querySelector(("#elem_tabla_fila"+numFila)+":last-child").append(editBtn);
    //document.querySelector(("#elem_tabla_fila"+numFila)+":last-child").setAttribute('class', 'text-center')

    let delBtn = document.createElement("button"); //Crear boton eliminar
    delBtn.setAttribute("id", "elem_tabla_del_"+numFila);
    delBtn.setAttribute("class", "btn btn-danger w-50");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("data-toggle", "modal");
    delBtn.setAttribute("data-target", "#modal_eliminar");
    delBtn.setAttribute("data-index-number", numFila);//------------------------------
    delBtn.innerHTML = "Eliminar";
    document.querySelector(("#elem_tabla_fila"+numFila)+":last-child").append(delBtn);

    document.getElementById('form_input').reset();
    let alert = document.getElementById('alerta_agregar'); //Mostrar alerta si se ha añadido correctamente.
        alert.setAttribute('class', 'alert alert-success ml-4 mt-3 fade show');
        alert.innerHTML = 'Agregada con exito.';
        alert.style.display = 'block';
        setTimeout(function(){
          let alert = document.getElementById('alerta_agregar');
          alert.setAttribute('class', 'alert alert-success fade in');
          alert.style.display = 'none';
        },3000);

    }else{
        let alert = document.getElementById('alerta_agregar'); //Mostrar alerta si faltan datos
        alert.setAttribute('class', 'alert alert-warning ml-4 mt-3 fade show');
        alert.style.display = 'block';
        alert.innerHTML = '<strong>Datos insuficientes</strong>, debes rellenar todos los campos.'
        setTimeout(function(){
          let alert = document.getElementById('alerta_agregar');
          alert.setAttribute('class', 'alert alert-warning fade in');
          alert.style.display = 'none';
        },3000);
    }
});

// cuando se abra el modal de editar registro, insertar en los inoputs los vaalores que quieras
//Con esto se podria solucionar
// Uno de los metodos que trae los modales son para modificar el funcionamiento cuando los abres o cierras
$('#modal_edit').on('show.bs.modal', function (event) {
    //console.log(event.relatedTarget.id)  //accedes a la propiedad id
    let numeFila = event.relatedTarget.id; //m1--elem_tabla_1
    let regex = /(\d+)/g;
    let indexNum = numeFila.match(regex);

    for(let i=1;i<5;i++){
        let textoTabla = document.getElementById(numeFila+'_'+i);  // asi traemos el nombre de la fila 1
        //almacenas todos los valores e insertas
        let campoEdit = document.getElementById('edit_input_'+i);
        campoEdit.dataset.indexNumber = indexNum;
        campoEdit.value = textoTabla.innerHTML;
    };
  });
  var guardarCambios = document.getElementById('guardar_cambios');
  guardarCambios.addEventListener('click', function(event){
    let numeID = document.getElementById('edit_input_1').dataset.indexNumber;
    for(let i=1;i<5;i++){
        let campoEdit = document.getElementById('edit_input_'+i);
        let textoTabla = document.getElementById('elem_tabla_'+numeID+'_'+i);
        textoTabla.innerHTML = campoEdit.value;
    };
    //  let alert = document.getElementById('alerta_entrada_modificada'); //Mostrar alerta si se modifica
    //  alert.setAttribute('class', 'alert alert-success fade show');
    //  alert.style.display = 'block';
    //  setTimeout(function(){
    //    let alert = document.getElementById('alerta_entrada_modificada');
    //    alert.setAttribute('class', 'alert alert-success fade in');
    //    alert.style.display = 'none';
    //  },3000);
  });
  $('#modal_eliminar').on('show.bs.modal', function (event) {
    let numeFila = event.relatedTarget.id;
    let regex = /(\d+)/g;
    let indexNum = numeFila.match(regex);
    let eliminarConfirma = document.getElementById('confirmar_eliminar');
    eliminarConfirma.dataset.indexNumber = indexNum;
  });
  var eliminarFila = document.getElementById('confirmar_eliminar');
  eliminarFila.addEventListener('click', function(event){
    let numeFila = eliminarFila.dataset.indexNumber;
    let filaEliminada = document.getElementById('elem_tabla_fila'+numeFila);
    let padreFila = filaEliminada.parentNode;
    padreFila.removeChild(filaEliminada);
    //let alert = document.getElementById('alerta_entrada_eliminada'); //Mostrar alerta si se elimina registro.
    //    alert.setAttribute('class', 'alert alert-dark fade show');
    //    alert.style.display = 'block';
    //    setTimeout(function(){
    //      let alert = document.getElementById('alerta_entrada_eliminada');
    //      alert.setAttribute('class', 'alert alert-dark fade in');
    //      alert.style.display = 'none';
    //    },3000);
  });


//-----------------------------------------------------------------------------------
  //No necesitas el codigo de arriba
  // Leer el elemento (event) que dispara este evento, opbtener de el el id de la fila que has clicado
  //No hace falta que al cerrar se limpien porque se vuelve a reesscribir cuando vuelvas a abrir el modal
  // Te miro git rapido
  //vale, te digo los comandos basicos para subirlo y el lunes te explico mejor

  // git init => inicializas un repositorio local

  // git status => compruebas el estado de los ficheros
  // Rojo= no añadidos al staged ( zona de arcchivos proeparados para subir a repo remoto)
  // Verde = archivos con modificaciones confirmadas, preparados para subirlo a repo remoto
  // git add . (. para añadir todos los ficheros al stage area)

  //Mo eolvide de commit (git commit -m "descripcion": confirmar cambios)
  // No hay repo remoto, lo aádimos agregar repo remoto: git remote add <nombre> <url>

  //subir cambios a repo remoto git push // git push --set-upstream origin master/main (depende)
  //--set-upstream  solo la primera vez, apunta hacia la rama principal remota

// git diff vemos los cambios en cada fichero, rojo linea eliminada, verde agregada
// git log --online vemos registro de todos los commit hechos
// Cada commit tiene un id identificativo, sirve para volver a ese commit si lo necesitas y restaurar ficheros
// para traerte los ficheros desde repo remoto: git pull , por ej, modifico directaente en github y hago commit alli
// El lunes vemos todo mas profundo,n o te aburro mas jaja, haz lo del modal y subelo.
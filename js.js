var saveBtn = document.getElementById("boton_guardar");
var numFila = 0;
//var numeroBoton = 0; /* nº de fila y de boton pueden ser iguales, te sobra una variable => numelemento */
//boton ?? guardar o actualizar ? las variables deben ser descriptivas
saveBtn.addEventListener("click", function(event){  //Boton para guardar en la tabla la informacion de los input
    numFila++;
    //numeroBoton++;
    if(document.getElementById("form_input_1").value !== ""){
    let fila = document.createElement("tr");
    fila.setAttribute("id", "elem_tabla_fila"+numFila);

    for(let i = 1; i<5; i++){
        let campo = document.createElement("td");
        let texto = document.getElementById("form_input_"+i).value;
        campo.setAttribute("id", "elem_tabla_"+numFila+"_"+i);
        campo.innerHTML = texto;
        fila.append(campo);
    };

    document.querySelector("tbody").append(fila);
    //EditBtn por ej
    let editBtn = document.createElement("button");
    editBtn.setAttribute("id", "elem_tabla_"+numFila);
    editBtn.setAttribute("class", "btn btn-secondary");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("data-toggle", "modal");
    editBtn.setAttribute("data-target", "#modal_edit");
    editBtn.innerHTML = "Editar";
    document.querySelector(("#elem_tabla_fila"+numFila)+":last-child").append(editBtn);
    document.getElementById('form_input').reset();
    /* editBtn.addEventListener("click", function(event){ 
        for(let a = 1;a<5;a++){
            let texto = document.getElementById("c"+numeroFila+a);
            let campM = document.getElementById("campM"+a);
            var textoT = texto.innerHTML;
            campM.setAttribute("value", textoT);
        };
        let guardar = document.getElementById("guardar")
        guardar.addEventListener("click", function(event){
            for(let a = 1;a<5;a++){
                let texto = document.getElementById("c"+numeroFila+a);
                let campM = document.getElementById("campM"+a);
                texto.innerHTML = campM.value;
            };
        });
    }); */
    };
});

// cuando se abra el modal de editar registro, insertar en los inoputs los vaalores que quieras
//Con esto se podria solucionar
// Uno de los metodos que trae los modales son para modificar el funcionamiento cuando los abres o cierras
$('#modal_edit').on('show.bs.modal', function (event) {
    //console.log(event.relatedTarget.id)  //accedes a la propiedad id
    let numeFila = event.relatedTarget.id; //m1--elem_tabla_1
    for(let i=1;i<5;i++){
        let textoTabla = document.getElementById(numeFila+'_'+i);  // asi traemos el nombre de la fila 1
        //let apellidos = document.getElementById(fila+'_2').innerHTML //apellido
        //let email = document.getElementById(fila+'_3').innerHTML // genero ,almacenas todos los valores e insertas
        //let genero = document.getElementById(fila+'_4').innerHTML
        let campoEdit = document.getElementById('edit_input_'+i);
        campoEdit.value = textoTabla.innerHTML;
    }
    $('#modal_edit').on('hidden.bs.modal', function (event) {
        for(let i=1;i<5;i++){
            let campoEdit = document.getElementById('edit_input_'+i).value;
            let textoTabla = document.getElementById(numeFila+'_'+i);  // asi traemos el nombre de la fila 1
            textoTabla.innerHTML = campoEdit;
        };
      });
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
var boton = document.getElementById("boton");
var numeroFila = 0;
var numeroBoton = 0; /* nº de fila y de boton pueden ser iguales, te sobra una variable => numelemento */
//boton ?? guardar o actualizar ? las variables deben ser descriptivas
boton.addEventListener("click", function(event){
    //document.getElementById("c1").innerHTML = nombre.value
    numeroFila++;
    numeroBoton++;
    if(document.getElementById("i1").value !== ""){
    let fila = document.createElement("tr");
    let filan = "f"+numeroFila
    fila.setAttribute("id", "f"+numeroFila);

    for(let i = 1; i<5; i++){
        let campo = document.createElement("td");
        let texto = document.getElementById("i"+i).value;
        campo.setAttribute("id", "c"+numeroFila+i);
        campo.innerHTML = texto;
        fila.append(campo);
    }

    document.querySelector("tbody").append(fila);
    //EditBtn por ej
    let crearBoton = document.createElement("button");
    crearBoton.setAttribute("id", "m"+numeroBoton);
    crearBoton.setAttribute("class", "btn btn-secondary modificar");
    crearBoton.setAttribute("type", "button");
    crearBoton.setAttribute("data-toggle", "modal");
    crearBoton.setAttribute("data-target", "#ventana");
    crearBoton.innerHTML = "Modificar";
    document.querySelector(("#f"+numeroFila)+":last-child").append(crearBoton);
    /* crearBoton.addEventListener("click", function(event){ 
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
$('#ventana').on('show.bs.modal', function (event) {
    console.log(event.relatedTarget.id)  //accedes a la propiedad id
    let fila = event.relatedTarget.id; //m1
     document.getElementById(fila+'_1').value  // asi traemos el nombre de la fila 1
     document.getElementById(fila+'_2').value //apellido
     document.getElementById(fila+'_3').value // genero ,almacenas todos los valores e insertas

     document.getElementById('campM1').value =  document.getElementById(fila+'_1').value;
     //No necesitas el codigo de arriba
  // Leer el elemento (event) que dispara este evento, opbtener de el el id de la fila que has clicado
  }) 

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

 

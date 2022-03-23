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
    crearBoton.addEventListener("click", function(event){
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
    });
    };
 });

// cuando se abra el modal de editar registro, insertar en los inoputs los vaalores que quieras

//Con esto se podria solucionar
// Uno de los metodos que trae los modales son para modificar el funcionamiento cuando los abres o cierras
$('#ventana').on('show.bs.modal', function (event) {
    console.log(event.relatedTarget.id)  //accedes a la propiedad id

  // Leer el elemento (event) que dispara este evento, opbtener de el el id de la fila que has clicado
  }) 
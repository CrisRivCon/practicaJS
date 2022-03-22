var boton = document.getElementById("boton")
var nombre = document.getElementById("nombre")
var apellidos = document.getElementById("apellidos")
var email = document.getElementById("email")
var genero = document.getElementById("genero")

boton.addEventListener("click", function(event){
    document.getElementById("c1").innerHTML = nombre.value
    document.getElementById("c2").innerHTML = apellidos.value
    document.getElementById("c3").innerHTML = email.value
    document.getElementById("c4").innerHTML = genero.value
})

var btnVerPeliculas = document.getElementsByClassName('verPeliculas');
//var idValue = document.getElementById("inputId").value;
//var urlUser = "https://jsonplaceholder.typicode.com/users?id="+idValue;
/* btnSearch.addEventListener('click', event =>{
    let idValue = document.getElementById("inputId").value;
    let urlUser = "https://jsonplaceholder.typicode.com/users?id="+idValue;
    fetch(urlUser)
        .then(response => response.json())
        .then(data => {
            let datos = `<p><b>Nombre:</b> ${data[0].name} </p>
            <p><b>Nombre de usuario:</b> ${data[0].username} </p>
            <p><b>Email:</b> ${data[0].email} </p>`;
            document.querySelector('.card-body').innerHTML = datos;
        });
    document.getElementById('form_input').reset();
}); 

fetch('flores.jpg').then(function(response) {
    if(response.ok) {
      response.blob().then(function(miBlob) {
        var objectURL = URL.createObjectURL(miBlob);
        miImagen.src = objectURL;
      });
    } else {
      console.log('Respuesta de red OK pero respuesta HTTP no OK');
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });*/
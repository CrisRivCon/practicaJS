
 
  const url = 'insertarActor.php';

  const inputFile = document.getElementById('form_img');
  const preview = document.getElementById('preview');
  const btnInsertar = document.getElementById('insertar_actor');
  const curFiles = inputFile.files;

  inputFile.addEventListener('change', event =>{
    let number = curFiles[0].size;
    if(validFileType(curFiles[0])){
      if(curFiles.length === 0) {
        preview.innerHTML = 'No files currently selected for upload';
      }else{
        preview.innerHTML = curFiles[0].name+"..."+ returnFileSize(number);
      }
    }else preview.innerHTML = 'El tipo de archivo no es válido.';
  });

  function returnFileSize(number) {
    if(number < 1024) {
      return number + 'bytes';
    } else if(number >= 1024 && number < 1048576) {
      return (number/1024).toFixed(1) + 'KB';
    } else if(number >= 1048576) {
      return (number/1048576).toFixed(1) + 'MB';
    }
  }

  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

//Enviar los datos para insertarlos en la BD
btnInsertar.addEventListener("click", event=>{
  const data = new FormData();
  data.append('file', curFiles);
  console.log(...data);
  console.log(curFiles[0]);

  fetch('insertarActor.php', {
      method: 'POST',
      type: 'JSON',
      body: data
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
      
  })

   .catch(function(err) {
      console.log(err);
   });
})

/*   var actorId = document.getElementById("actor").value;
  var filmId = document.getElementById("film").value;

  data.append('actor_id', actorId);
  data.append('film_id', filmId);
  console.log(data);

  fetch(url, {
    method: 'POST',
    type: 'JSON',
    body: data,
  })
  .then(response=> {
    console.log(response);
    if(response.status==200) {
        return response.json();
    } else {
        throw "Error en la llamada AJAX";
    }
  })
  .then(data => console.log(data))
  .catch(function(err) {
    console.log(err);
  });
});
 */
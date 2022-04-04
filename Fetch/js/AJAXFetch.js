var btnSearch = document.getElementById("btnSearch");
//var idValue = document.getElementById("inputId").value;
//var urlUser = "https://jsonplaceholder.typicode.com/users?id="+idValue;


btnSearch.addEventListener('click', event =>{
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

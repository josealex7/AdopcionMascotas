let url = " http://localhost:4002/usuarios/";
let data = [];
let id;
let arrayUpdate = {};
let botonCorazon = document.getElementById('boton-corazon');


const getData = async() => {
    let resp = await fetch(url);
    data = await resp.json();
    console.log(data);
    mostrarData();
}

const mostrarData = () => {
    data.forEach(element => {
        id = element.id;
        document.getElementById('nombre').value = element.nombre;
        document.getElementById('apellido').value = element.apellido;
        document.getElementById('correo').value = element.correo;
    })
}

const enviarData = async() => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;

    arrayUpdate = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo
    }

    console.log(arrayUpdate);
    await fetch(url + id, {
        method: 'PUT',
        body: JSON.stringify(arrayUpdate),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })

}

getData();

let botonGuardar = document.getElementById('botonguardar');
botonGuardar.addEventListener('click', e => {
    e.preventDefault();
    enviarData();
});

botonCorazon.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'favoritos.html';
})

let botonInicio = document.getElementById('inicio');
botonInicio.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = "inicio.html";
})
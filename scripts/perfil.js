let url = " http://localhost:4002/usuarios/";
let data = [];
let id;
let arrayUpdate = {};


const getData = async() => {
    let resp = await fetch(url);
    data = await resp.json();
    console.log(data);
    mostrarData();
}

const mostrarData = () => {
    let nombreApellido = "";
    data.forEach(element => {
        id = element.id;
        document.getElementById('nombre').value = element.nombre;
        document.getElementById('apellido').value = element.apellido;
        document.getElementById('correo').value = element.correo;
        nombreApellido = element.nombre + " " + element.apellido;
    })
    let tituloNombre = document.getElementById('nombre-label');
    tituloNombre.innerHTML = `
        <label>${nombreApellido}</label>

    
    `;
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
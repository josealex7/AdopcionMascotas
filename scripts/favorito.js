let urlPerro = "http://localhost:4001/perros/";
let urlGato = "http://localhost:4000/gatos/";
let arrayFavorito = [];
let divFavorito = document.getElementById('div-data');

if (localStorage.getItem('arrayFavorito')) {
    arrayFavorito = JSON.parse(localStorage.getItem('arrayFavorito'));
}



const getData = async(url, id) => {
    const resp = await fetch(url);
    let data = await resp.json();
    pintarDatos(data, id);
};

const obtenerData = () => {
    arrayFavorito.forEach(element => {
        if (element.mascota === 'perro') {
            getData(urlPerro, element.id);

        } else {
            getData(urlGato, element.id);
        }
    });
}

const pintarDatos = (data, id) => {
    data.forEach(element => {
        if (id === element.id) {
            divFavorito.innerHTML += `
            <div class="contenedor">
            <buttom id="${element.id}">
            <img src="${element.imagen}" alt="">
            <label class="texto-encima1" for="">${element.nombre}</label>
            <label class="texto-encima2" for="">${element.raza}</label>
            </buttom>
        </div>
            `;
        }
    });
}
obtenerData();
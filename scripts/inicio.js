let url;
let data = [];
let mascotaDetalle = [];
const div = document.getElementById('div-data');
let botonPerro = document.getElementById('perro');

botonPerro.addEventListener('click', e => {
    e.preventDefault();
    url = 'http://localhost:4001/perros/';
    getData();
    showData();

})

let botonGato = document.getElementById('gato');
botonGato.addEventListener('click', e => {
    e.preventDefault();
    url = 'http://localhost:4000/gatos/';
    getData();
    showData();
})

const getData = async() => {
    const resp = await fetch(url);
    data = await resp.json();
};

const showData = () => {
    div.innerHTML = ``;
    data.forEach(element => {

        div.innerHTML += `
        <div class="contenedor">
            <buttom id="${element.id}">
            <img src="${element.imagen}" alt="">
            <label class="texto-encima1" for="">${element.nombre}</label>
            <label class="texto-encima2" for="">${element.raza}</label>
            </buttom>
        </div>
        `;

    })
    eventoDetalle();
}

const eventoDetalle = () => {
    data.forEach(element => {
        let botonEvento = document.getElementById(element.id);
        botonEvento.addEventListener('click', e => {
            e.preventDefault();
            mascotaDetalle = [element.id, element.categoria];
            localStorage.setItem('SeleccionDetalle', JSON.stringify(mascotaDetalle));
            window.location.href = 'detalle.html';
        });
    })
}
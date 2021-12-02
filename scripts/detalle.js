let id_detalle = JSON.parse(localStorage.getItem('SeleccionDetalle'));
let url;
let data = [];
const divHtml = document.getElementById('contenedor');
let arrayFavorito = [];

if (localStorage.getItem('arrayFavorito')) {
    arrayFavorito = JSON.parse(localStorage.getItem('arrayFavorito'));
}


const identificarData = () => {
    if (id_detalle[1] === 'perro') {
        url = 'http://localhost:4000/perros/';
    } else {
        url = 'http://localhost:4001/gatos/';
    }
}

const getData = async() => {
    const resp = await fetch(url);
    data = await resp.json();

    showData();
};

const showData = () => {
    data.forEach(element => {
        if (element.id == id_detalle[0]) {
            divHtml.innerHTML = `
        <div class="contenedor-img-principal">
            <img src="${element.imagen}" alt="">
        </div>
        <div class="contenedor-detalle">
            <div class="contenedor-nombre-favorito">
                <div class="contenedor-nombre">
                    <label for="">${element.nombre}</label>
                    <img src="${element.genero}" alt="">
                </div>
                <div class="contenedor-favorito">
                    <button id="boton-favorito">
                <img src="image/corazon.png" alt="">
            </button>
                </div>
            </div>
            <div class="contenedor-raza-edad">
                <div class="contenedor-raza">
                    <img src="image/contrato.png" alt="">
                    <label for="">${element.raza}</label>
                </div>
                <div class="contenedor-edad">
                    <img src="image/grupo_perros.png" alt="">
                    <label for="">${element.edad}</label>
                </div>
            </div>
            <div class="contenedor-ubicacion">
                <img src="image/icono-ubicacion.png" alt="">
                <div>
                    <label for="">${element.ubicacion}</label>
                </div>
            </div>
            <h2 class="personalidad">Personalidad</h2>
            <div class="contenedor-personalidades">
                <div class="contenedor-personalidad">
                    <div class="contenedor-personalidad-div">
                        <img class="imagen-personalidad" src="image/corazones.png" alt="">
                        <div class="contenedor-personalidad-label">
                            <label for="">${element.personalidad[0]}</label>
                        </div>
                    </div>
                    <div class="contenedor-personalidad-div">
                        <img class="imagen-personalidad" src="image/almohada.png" alt="">
                        <div class="contenedor-personalidad-label">
                            <label for="">${element.personalidad[1]}</label>
                        </div>
                    </div>
                    <div class="contenedor-personalidad-div">
                        <img class="imagen-personalidad" src="image/balon.png" alt="">
                        <div class="contenedor-personalidad-label">
                            <label for="">${element.personalidad[2]}</label>
                        </div>
                    </div>
                </div>
                <h2 class="personalidad">Historia de ${element.nombre}</h2>
                <div>
                    <p class="historia">${element.historia}</p>
                </div>
                <div class="contenedor-contacto">
                    <div class="imagen-contacto">
                        <img src="${element.imgusuario}" alt="">
                    </div>
                    <div class="contenedor-nombre-contacto">
                        <div>
                            <label for="">Publicado por </label>
                        </div>
                        <div>
                            <label class="contenedor-label">${element.usuario}</label>
                        </div>
                    </div>
                    <div class="contenedor-boton-contactar">
                        <a href="chat.html">
                        <button class="boton-contactar">Contactar</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
    });
    eventoFavorito();
    pintarFavorito();
}

identificarData();
getData();



const pintarFavorito = () => {
    let corazon = document.getElementById('boton-favorito');
    arrayFavorito.forEach(element => {
        if (element.id === id_detalle[0] && element.mascota === id_detalle[1]) {
            corazon.innerHTML = ``;
            corazon.innerHTML = `
            <img src="image/corazonMorado.png" alt="">
            `;
        }
    });


}

const agregarFavorito = () => {
    let agregado = true;
    arrayFavorito.forEach(element => {
        if (element.id === id_detalle[0] && element.mascota === id_detalle[1]) {
            agregado = false;
        }
    });
    if (agregado) {
        arrayFavorito.push({
            'id': id_detalle[0],
            'mascota': id_detalle[1]
        });
    }


    localStorage.setItem('arrayFavorito', JSON.stringify(arrayFavorito));
    location.reload();
}

const eventoFavorito = () => {
    let botonFavorito = document.getElementById('boton-favorito');
    botonFavorito.addEventListener('click', e => {
        e.preventDefault();
        agregarFavorito();
    })
}
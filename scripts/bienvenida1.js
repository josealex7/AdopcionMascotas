let boton = document.getElementById('boton-siguiente');
boton.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('bienvenida2.html');
})
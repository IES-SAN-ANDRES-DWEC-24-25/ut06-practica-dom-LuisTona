const boton = document.getElementById('boton');
const color = document.getElementById('color');

boton.addEventListener('click', ()=>{
    const h1Tag = document.getElementsByTagName('h1');
    h1Tag[0].style.color = color.value;

    const h1Id = document.getElementById('encabezado');
    h1Id.style.color = color.value;
});


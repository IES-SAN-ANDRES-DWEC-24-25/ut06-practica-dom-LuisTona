let boton = document.getElementById('boton');
let body = document.getElementsByTagName('body');


boton.addEventListener('click', ()=>{
    if(boton.textContent == 'Fondo claro'){
        boton.textContent = 'Fondo oscuro';
    }else{
        boton.textContent= 'Fondo claro'
    }
    body[0].classList.toggle('inverso');
})
const boton = document.getElementsByClassName('BotonAñadir')[0];

let lista = document.getElementsByTagName('ul')[0];

boton.addEventListener('click', ()=>{
    let nuevoElemento = document.getElementsByClassName('AñadirElemento')[0].value
    let li = document.createElement('li');
    li.textContent = nuevoElemento;
    lista.appendChild(li);
})
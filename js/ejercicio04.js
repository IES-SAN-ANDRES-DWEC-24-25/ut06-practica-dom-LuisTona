const lista = document.getElementsByClassName('lista')[0];
let ul = document.getElementsByTagName('ul')[0];
let nuevoElemento = document.getElementsByClassName('AñadirElemento')[0];

lista.addEventListener('click', (e)=>{
    if(e.target.getAttribute('id') == 'añadir' && nuevoElemento.value !== ' '){
        
        let li = document.createElement('li');
        li.textContent = nuevoElemento.value;
        ul.appendChild(li);
        nuevoElemento.value = ' ';
        
    }else if(e.target.getAttribute('id') == 'borrarPrimero'){
        ul.firstElementChild.remove()
    }else if(e.target.getAttribute('id') == 'borrarUltimo'){
        ul.lastElementChild.remove()
    }
})

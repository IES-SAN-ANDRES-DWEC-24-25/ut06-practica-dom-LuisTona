let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


window.addEventListener("load",iniciar);
  function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
      attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

function crearbotones(event) {
// Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  if(event.target.classList.contains('subir')){
    subirList();
  }else if(event.target.classList.contains('bajar')){
    bajarList();
  }else if(event.target.classList.contains('borrar')){
    event.target.parentNode.remove();
  }

  function subirList(){
    for(let k = 0; k < lis.length; k++){
      if(lis[k] == event.target.parentNode && k != 0){
        let li = lis[k - 1].childNodes[0].textContent;
        lis[k - 1].childNodes[0].textContent = lis[k].childNodes[0].textContent;
        lis[k].childNodes[0].textContent = li;
      }
    }
  }

  function bajarList(){
    for(let k = 0; k < lis.length; k++){
      if(lis[k] == event.target.parentNode && k != lis.length -1){
        let li = lis[k + 1].childNodes[0].textContent;
        lis[k + 1].childNodes[0].textContent = lis[k].childNodes[0].textContent;
        lis[k].childNodes[0].textContent = li;
      }
    }
  }
}

function MostrarOcultarLista(){
// Muestra u oculta la información de las cosas que son violeta (listDiv)
  listDiv.classList.toggle('noVisible');
}
function CambiarTextoLista(){
//Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
// Inicialmente COSAS QUE SON VIOLETA
  descriptionP.textContent = descriptionInput.value.toUpperCase();
}
function AñadirElemento(){
//Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
//Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  listUl.appendChild(li);
  attachListItemButtons(li);
}


